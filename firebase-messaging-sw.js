importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyAhJOKFbBZGLAF7kgSBXYOQNeOSfwq30B8",
  authDomain: "personalweb-9a157.firebaseapp.com",
  projectId: "personalweb-9a157",
  storageBucket: "personalweb-9a157.appspot.com",
  messagingSenderId: "535997393456",
  appId: "1:535997393456:web:15a8e4ffcfde94ba221bf5",
  measurementId: "G-4P7PPBN11C"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("New Message");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
  console.log('notification received: ', event)
});