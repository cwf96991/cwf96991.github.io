'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "48725a60586297221b77491822ed870f",
"/": "48725a60586297221b77491822ed870f",
"main.dart.js": "6a40699979cd8e3a757a88461a1faaf8",
"favicon.png": "d6cfef490aef4920665dd824d6c33a4f",
"icons/Icon-192.png": "d6cfef490aef4920665dd824d6c33a4f",
"icons/Icon-512.png": "d6cfef490aef4920665dd824d6c33a4f",
"manifest.json": "d35718d47fa0fc27b2456561f02b4bd3",
"assets/AssetManifest.json": "11d2d62ee78f56ecc72a713f727cafac",
"assets/NOTICES": "abe9262ffc5f4699b703bc19c6d8e01b",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/googleMap.gif": "b4ceb977f6ef85bc3627d85f65751348",
"assets/assets/splash.gif": "f41e2feb066a1ca332147dcec8f173d4",
"assets/assets/gif1.gif": "87f8176a8553c428ae2e99c26ac89ff9",
"assets/assets/gif3.gif": "638ed12469bca48ce1e40d49cfb58bac",
"assets/assets/changeIcon.gif": "5d15edf22dddb02f2cf21b3e9d288415",
"assets/assets/icon.png": "7e1be74f6dc8848b5145e8a683b116b9",
"assets/assets/gif2.gif": "83dca8805066d99bc73f801676cc11ed",
"assets/assets/GoogleSignIn.gif": "36f133ce8e10118916a86076911fde56",
"assets/assets/cropped.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/slidable.gif": "36117f7357d3ee72fa02835c14554d86",
"assets/assets/slideUpPanel.gif": "83dca8805066d99bc73f801676cc11ed",
"assets/assets/login.gif": "4c7ab4562de44f690221ea7640fbb0b7",
"assets/assets/animateList.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/quickAction.gif": "539e639c2f13bd7b69f2d4ad55391689",
"assets/assets/logo_w.png": "d6cfef490aef4920665dd824d6c33a4f",
"assets/assets/animateUI.gif": "638ed12469bca48ce1e40d49cfb58bac",
"assets/assets/build%2520app.png": "07df88fcb6efcc3a33ef562ab0191d66",
"assets/assets/logo_b.png": "68444c31b3aeb7da73280274edadd6fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
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
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
