'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "50deb48c898b4b2f089a4594b47aa6d6",
"assets/assets/animateList.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/animateUI.gif": "638ed12469bca48ce1e40d49cfb58bac",
"assets/assets/buildApp.png": "07df88fcb6efcc3a33ef562ab0191d66",
"assets/assets/changeIcon.gif": "5d15edf22dddb02f2cf21b3e9d288415",
"assets/assets/datePicker.gif": "3536dbc750226fc701c89691d58445f9",
"assets/assets/expandableText.gif": "7d0af40ebdffbb08d44c36721e225568",
"assets/assets/fav.gif": "0509455947cfbd9fbe69b534ed5d430d",
"assets/assets/figure.gif": "62b4f3e95d45451607ed12ee82b8e0e8",
"assets/assets/figure1.gif": "62b4f3e95d45451607ed12ee82b8e0e8",
"assets/assets/googleMap.gif": "b4ceb977f6ef85bc3627d85f65751348",
"assets/assets/GoogleSignIn.gif": "36f133ce8e10118916a86076911fde56",
"assets/assets/GuestBackIcon.png": "b037c677bfbcfdb8cb0d6ea953b3702b",
"assets/assets/hero.gif": "3e40b7147a020fe9602934a583cf86fa",
"assets/assets/icon(temp).png": "7e1be74f6dc8848b5145e8a683b116b9",
"assets/assets/icon.png": "68444c31b3aeb7da73280274edadd6fc",
"assets/assets/images/concave.png": "da619c74d00e5832c7801bf1fd4ef5f6",
"assets/assets/images/convex.png": "1cb4388459aef43c9cdf4c4f6e9e034f",
"assets/assets/images/flat.png": "f456d4ab5b62f847109d07d02b3043dd",
"assets/assets/inbox.gif": "3d62f36ef1b913588b79717c779dc076",
"assets/assets/inboxPreview.gif": "18c132f283b93795dce2d2c7261ec8c4",
"assets/assets/lendy_icon.png": "b664976549350b7a4c35ca1a87e38f2c",
"assets/assets/login.gif": "4c7ab4562de44f690221ea7640fbb0b7",
"assets/assets/logo_w.png": "d6cfef490aef4920665dd824d6c33a4f",
"assets/assets/neu1.png": "a37b437deafe378869bff7a8e79b18ed",
"assets/assets/neu2.png": "14a32c8e676e753260ce3f9df321e243",
"assets/assets/neu3.png": "210dd2d84901cb4252b18309bedebd82",
"assets/assets/neu4.png": "c56aa72e71b14fb6bbf38cb130bc42e1",
"assets/assets/pcBg.JPG": "dc43885eec26017bd87dacf8469069d1",
"assets/assets/qrcodeGen.gif": "45f9601c98ecd008f39aa9c8d45e8668",
"assets/assets/quickAction.gif": "539e639c2f13bd7b69f2d4ad55391689",
"assets/assets/shareImage.gif": "1b96119f0307f3cb0437a279f9cbf38d",
"assets/assets/skillBg.JPG": "81be144ae0587b5c501abc96eb0db530",
"assets/assets/slidable.gif": "fa4018870c9b760173ac4bd0d84ba5dc",
"assets/assets/slideUpPanel.gif": "83dca8805066d99bc73f801676cc11ed",
"assets/assets/splash.gif": "88d709882e2edba5d1f326def96f8340",
"assets/assets/tag.png": "7559f2868e5490b6816f706602041c2e",
"assets/assets/techBg.jpg": "778662f20cc76ccdb88fe9fb1bfa083b",
"assets/assets/Trpg_icon.png": "80ea885f814ced4d69c61a5ec4683aa4",
"assets/assets/urlLauncher.gif": "49949dc5f3810fa5217c0b2510592fb5",
"assets/FontManifest.json": "f6d27a2c487fb7c94e10f86e7611182a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5c3238ac993832b936f955b4e2158c13",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_brand_icons/fonts/brands.ttf": "c68086e056cc711231ec09ea8b005516",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/nice_button/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"favicon.jpg": "a448f5223f4bea2fb6ae8ad00e74a5c5",
"favicon.png": "d6cfef490aef4920665dd824d6c33a4f",
"firebase-messaging-sw.js": "050caf235dbdb02ee26963ba8409f7fe",
"icons/Icon-192.jpg": "a448f5223f4bea2fb6ae8ad00e74a5c5",
"icons/Icon-512.jpg": "b656d4c77e037c2cb2de4f50e382bc9a",
"index.html": "523134959e4fbcf2ff6e10817c9bae8c",
"/": "523134959e4fbcf2ff6e10817c9bae8c",
"main.dart.js": "19a60e1770106371978fc2b95ee3f11f",
"manifest.json": "2a08bd0dc6390d616aed7fb09af29f9e",
"version.json": "ba43d31b1f9c8663c851858310b10a72"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
