importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.js')
       .then(function(registration) {
         console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
       });
    }

 firebase.initializeApp({
    messagingSenderId: "907834086531"
   })

const initMessaging = firebase.messaging()