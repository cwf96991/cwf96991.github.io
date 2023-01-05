import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAhJOKFbBZGLAF7kgSBXYOQNeOSfwq30B8",
    authDomain: "personalweb-9a157.firebaseapp.com",
    projectId: "personalweb-9a157",
    storageBucket: "personalweb-9a157.appspot.com",
    messagingSenderId: "535997393456",
    appId: "1:535997393456:web:15a8e4ffcfde94ba221bf5",
    measurementId: "G-4P7PPBN11C"
};


const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        const serviceWorker = await window.navigator.serviceWorker
            .getRegistration('/firebase-push-notification-scope');
        if (serviceWorker)
            return serviceWorker;
        return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
            scope: '/firebase-push-notification-scope',
        });
    }
    throw new Error('The browser doesn`t support service worker.');
};

export const getFirebaseToken = async() =>getOrRegisterServiceWorker()
        .then((serviceWorkerRegistration) =>
            getToken(messaging, { vapidKey: 'BFSgOEVNbWPVgxaPQ4w1MyAigFGNz_KitopsjPXbcCqE3XjvyriHyQ1BZt2_jwygYg79TACuo8MbyU3_Qvo9VHA', serviceWorkerRegistration }));

export const onForegroundMessage = () =>
    new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));