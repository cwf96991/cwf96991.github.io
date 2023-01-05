
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAhJOKFbBZGLAF7kgSBXYOQNeOSfwq30B8",
    authDomain: "personalweb-9a157.firebaseapp.com",
    projectId: "personalweb-9a157",
    storageBucket: "personalweb-9a157.appspot.com",
    messagingSenderId: "535997393456",
    appId: "1:535997393456:web:15a8e4ffcfde94ba221bf5",
    measurementId: "G-4P7PPBN11C"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("payload", payload)
    const notificationTitle = payload.notification.title;
    const notificationOptions = { body: payload.notification.body, data: payload.data };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
self.addEventListener('notificationclick', (e) => {
    // Close the notification popout
    e.notification.close();
    // Get all the Window clients
    e.waitUntil(clients.matchAll({ type: 'window' }).then((clientsArr) => {
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientsArr.some((windowClient) => windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then((windowClient) => windowClient ? windowClient.focus() : null);
    }));
});