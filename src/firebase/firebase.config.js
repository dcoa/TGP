import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBpQbC5mjGsr5SRZTqp39FqL-ZoUpXnJ0",
    authDomain: "tgp-legal.firebaseapp.com",
    databaseURL: "https://tgp-legal.firebaseio.com",
    projectId: "tgp-legal",
    storageBucket: "tgp-legal.appspot.com",
    messagingSenderId: "495715512097",
    appId: "1:495715512097:web:dca91247352ab35b0f9860"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
