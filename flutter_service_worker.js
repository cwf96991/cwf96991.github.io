'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8d7235789ed377793f6e9cb80603814b",
"assets/assets/animateList.gif": "84973366fbbbd79642e492707d0557bc",
"assets/assets/animateUI.gif": "be85bcc82aa81ce5e17e718f93ca9f9b",
"assets/assets/banner/cms.jpeg": "11326d82a9313dc42b86e8c06ee7edbc",
"assets/assets/banner/e-commerce.jpg": "2db5a3f2be76363303d7c101364da461",
"assets/assets/banner/FlutterBanner.png": "772fdb89eff435823106b44046e8065e",
"assets/assets/banner/nft.jpg": "3f53da61257c230ca8f8839f51c96685",
"assets/assets/buildApp.png": "07df88fcb6efcc3a33ef562ab0191d66",
"assets/assets/c0.jpg": "8fdcbcdcf36e962073bd82a13293168d",
"assets/assets/c1.jpg": "53998480f4419a073c37b59772e2fc05",
"assets/assets/c2.jpg": "05b934b5ee0ab15b2b326080aa161dfe",
"assets/assets/c3.jpg": "7c9f565a3637729746c3c74e35c5ac46",
"assets/assets/c4.gif": "366efd6fece59d24cce849329cff8895",
"assets/assets/changeIcon.gif": "482c83b727d45c6a61a6e4fc0ce02d8d",
"assets/assets/cwfateFullLogo.svg": "1ac4773f50ef598e4b05a6056739d43d",
"assets/assets/cwfateLogo.svg": "adf991059046537ea127f70169e35820",
"assets/assets/cwfateText.svg": "c151cbebec82eb705303bf3fb1bcc7cb",
"assets/assets/datePicker.gif": "3536dbc750226fc701c89691d58445f9",
"assets/assets/expandableText.gif": "7d0af40ebdffbb08d44c36721e225568",
"assets/assets/fav.gif": "0509455947cfbd9fbe69b534ed5d430d",
"assets/assets/figure.gif": "62b4f3e95d45451607ed12ee82b8e0e8",
"assets/assets/figure1.gif": "62b4f3e95d45451607ed12ee82b8e0e8",
"assets/assets/googleMap.gif": "2ade229cde4c77c180e14385cf33c29c",
"assets/assets/GoogleSignIn.gif": "a9e65fa2497c2c77a5918cb4112cd74e",
"assets/assets/GuestBackIcon.png": "b037c677bfbcfdb8cb0d6ea953b3702b",
"assets/assets/hero.gif": "3e40b7147a020fe9602934a583cf86fa",
"assets/assets/icon(temp).png": "7e1be74f6dc8848b5145e8a683b116b9",
"assets/assets/icon.png": "68444c31b3aeb7da73280274edadd6fc",
"assets/assets/images/concave.png": "da619c74d00e5832c7801bf1fd4ef5f6",
"assets/assets/images/convex.png": "1cb4388459aef43c9cdf4c4f6e9e034f",
"assets/assets/images/flat.png": "f456d4ab5b62f847109d07d02b3043dd",
"assets/assets/image_part_0.jpg": "a548dc55621316532c5e46f9ac610766",
"assets/assets/image_part_1.jpg": "c98bba9aeb90961c7a90588b24636292",
"assets/assets/image_part_2.jpg": "95e1f462b5004a970bd1c5bbbd23a763",
"assets/assets/inbox.gif": "3d62f36ef1b913588b79717c779dc076",
"assets/assets/inboxPreview.gif": "18c132f283b93795dce2d2c7261ec8c4",
"assets/assets/lendy_icon.png": "b664976549350b7a4c35ca1a87e38f2c",
"assets/assets/login.gif": "44426b17bd6f973f4add14f102a7c44b",
"assets/assets/logo_w.png": "d6cfef490aef4920665dd824d6c33a4f",
"assets/assets/neu1.png": "a37b437deafe378869bff7a8e79b18ed",
"assets/assets/neu2.png": "14a32c8e676e753260ce3f9df321e243",
"assets/assets/neu3.png": "210dd2d84901cb4252b18309bedebd82",
"assets/assets/neu4.png": "c56aa72e71b14fb6bbf38cb130bc42e1",
"assets/assets/pcBg.JPG": "4c682aa151afd36009a562e1c5c12243",
"assets/assets/qrcodeGen.gif": "45f9601c98ecd008f39aa9c8d45e8668",
"assets/assets/quickAction.gif": "15e61fd6b3c51106ad72c5681349af45",
"assets/assets/shareImage.gif": "1b96119f0307f3cb0437a279f9cbf38d",
"assets/assets/skillBg.JPG": "2fcb4b39280c21ff32a409e91d92611a",
"assets/assets/slidable.gif": "fa4018870c9b760173ac4bd0d84ba5dc",
"assets/assets/slideUpPanel.gif": "c737317cc75dd50338f19a30c8915db6",
"assets/assets/splash.gif": "88d709882e2edba5d1f326def96f8340",
"assets/assets/tag.png": "7559f2868e5490b6816f706602041c2e",
"assets/assets/techBg.jpg": "778662f20cc76ccdb88fe9fb1bfa083b",
"assets/assets/Trpg_icon.png": "80ea885f814ced4d69c61a5ec4683aa4",
"assets/assets/urlLauncher.gif": "49949dc5f3810fa5217c0b2510592fb5",
"assets/FontManifest.json": "47c24428f38780709ec7497f40adf4dd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2d8886ea2bf78fdde96dfddf1588d7f3",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/nice_button/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "336ffd95bd1f957e4275ced3d06720fe",
"favicon.jpg": "a448f5223f4bea2fb6ae8ad00e74a5c5",
"firebase-messaging-sw.js": "5435a0cd5a3c533ef5b9681b5d1a9e91",
"icons/Icon-192.jpg": "a448f5223f4bea2fb6ae8ad00e74a5c5",
"icons/Icon-512.jpg": "b656d4c77e037c2cb2de4f50e382bc9a",
"index.html": "a1baa4239a430d3696c4d039fe188d77",
"/": "a1baa4239a430d3696c4d039fe188d77",
"main.dart.js": "987bf5616a6f5a775c5110564f9e15dc",
"manifest.json": "020e0a84475f9529b0931d02d4efce8c",
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
