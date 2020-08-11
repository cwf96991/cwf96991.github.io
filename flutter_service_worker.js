'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe1044a26ae9b6ce690f9bd776363d50",
"assets/assets/animateList.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/animateUI.gif": "638ed12469bca48ce1e40d49cfb58bac",
"assets/assets/build%2520app.png": "07df88fcb6efcc3a33ef562ab0191d66",
"assets/assets/changeIcon.gif": "5d15edf22dddb02f2cf21b3e9d288415",
"assets/assets/cropped.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/datePicker.gif": "3536dbc750226fc701c89691d58445f9",
"assets/assets/expandableText.gif": "7d0af40ebdffbb08d44c36721e225568",
"assets/assets/fav.gif": "0509455947cfbd9fbe69b534ed5d430d",
"assets/assets/figure.gif": "62b4f3e95d45451607ed12ee82b8e0e8",
"assets/assets/googleMap.gif": "b4ceb977f6ef85bc3627d85f65751348",
"assets/assets/GoogleSignIn.gif": "36f133ce8e10118916a86076911fde56",
"assets/assets/hero.gif": "3e40b7147a020fe9602934a583cf86fa",
"assets/assets/icon.png": "7e1be74f6dc8848b5145e8a683b116b9",
"assets/assets/inbox.gif": "3d62f36ef1b913588b79717c779dc076",
"assets/assets/inboxPreview.gif": "18c132f283b93795dce2d2c7261ec8c4",
"assets/assets/lendy_icon.png": "b664976549350b7a4c35ca1a87e38f2c",
"assets/assets/login.gif": "4c7ab4562de44f690221ea7640fbb0b7",
"assets/assets/logo_b.png": "68444c31b3aeb7da73280274edadd6fc",
"assets/assets/logo_w.png": "d6cfef490aef4920665dd824d6c33a4f",
"assets/assets/pcBg.JPG": "dc43885eec26017bd87dacf8469069d1",
"assets/assets/qrcodeGen.gif": "45f9601c98ecd008f39aa9c8d45e8668",
"assets/assets/quickAction.gif": "539e639c2f13bd7b69f2d4ad55391689",
"assets/assets/shareImage.gif": "1b96119f0307f3cb0437a279f9cbf38d",
"assets/assets/slidable.gif": "fa4018870c9b760173ac4bd0d84ba5dc",
"assets/assets/slideUpPanel.gif": "83dca8805066d99bc73f801676cc11ed",
"assets/assets/splash.gif": "88d709882e2edba5d1f326def96f8340",
"assets/assets/tag.png": "7559f2868e5490b6816f706602041c2e",
"assets/assets/Trpg_icon.png": "80ea885f814ced4d69c61a5ec4683aa4",
"assets/assets/urlLauncher.gif": "49949dc5f3810fa5217c0b2510592fb5",
"assets/FontManifest.json": "39c2e7525d27d0fc4fc78d563d5c3074",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "01d982284315d4698dc840c49407f43f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_brand_icons/fonts/brands.ttf": "c68086e056cc711231ec09ea8b005516",
"favicon%202.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "d6cfef490aef4920665dd824d6c33a4f",
"icons/Icon-192%202.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "d6cfef490aef4920665dd824d6c33a4f",
"icons/Icon-512%202.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "d6cfef490aef4920665dd824d6c33a4f",
"index.html": "4a443696b51b2303fecff8665484910d",
"/": "4a443696b51b2303fecff8665484910d",
"main.dart.js": "c0de87c04e28bc50f91f91114077d04e",
"manifest.json": "d7f96e70f7001d173521f13c865b911f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
