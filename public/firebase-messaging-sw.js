// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBkoP4ApNFwLS_SPYH5kLf-TDUAEFn2DFE",
    authDomain: "rxbox-5a489.firebaseapp.com",
    databaseURL: "https://rxbox-5a489.firebaseio.com",
    projectId: "rxbox-5a489",
    storageBucket: "rxbox-5a489.appspot.com",
    messagingSenderId: "91412800469",
    appId: "1:91412800469:web:1b347e300faf147080935c",
    measurementId: "G-89QTERYYN3"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'new message from chat app';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });