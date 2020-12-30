// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/[the number of version matching with firebase in package.json]/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/[for example: 7.16.1]/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
import { environment } from "./environments/environment";

const { messagingSenderId } = environment.firebase;

firebase.initializeApp({
    messagingSenderId
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();