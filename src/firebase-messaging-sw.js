// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
//import { environment } from "./environments/environment";

//const { messagingSenderId } = environment.firebase;

firebase.initializeApp({
    apiKey: "AIzaSyChKobqlHYG9U-yjBIPs2fTdm3TT_jE7-c",
    authDomain: "push-notifications-a7993.firebaseapp.com",
    projectId: "push-notifications-a7993",
    storageBucket: "push-notifications-a7993.appspot.com",
    messagingSenderId: "437327802529",
    appId: "1:437327802529:web:fe3ed9ac4eb2e06df700e0"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log('payload', payload);
  const notificationTitle = 'ALERT';
  const notificationOptions = {
    body: "HELLO WORLD"
  }
  self.registration.showNotification({
    notificationTitle,
    notificationOptions
  });
})