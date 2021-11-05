import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDLKkioPDpTO1pnYHCJdpEphEus6DIaQLs",
  authDomain: "notification-app-8bc0c.firebaseapp.com",
  projectId: "notification-app-8bc0c",
  storageBucket: "notification-app-8bc0c.appspot.com",
  messagingSenderId: "207332192508",
  appId: "1:207332192508:web:4a086505ea7bba739ee779"
};

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}