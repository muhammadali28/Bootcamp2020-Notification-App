importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyDLKkioPDpTO1pnYHCJdpEphEus6DIaQLs",
    authDomain: "notification-app-8bc0c.firebaseapp.com",
    projectId: "notification-app-8bc0c",
    storageBucket: "notification-app-8bc0c.appspot.com",
    messagingSenderId: "207332192508",
    appId: "1:207332192508:web:4a086505ea7bba739ee779"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();