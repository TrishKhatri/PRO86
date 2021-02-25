import firebase from 'firebase';
require("@firebase/firestore");




 var firebaseConfig = {
    apiKey: "AIzaSyCv4mF5ckMeQRbdNIsk-B9i2cM2w_xLOaU",
    authDomain: "booksanta-bad4d.firebaseapp.com",
    projectId: "booksanta-bad4d",
    storageBucket: "booksanta-bad4d.appspot.com",
    messagingSenderId: "1042284455076",
    appId: "1:1042284455076:web:f6e5c859b1f3af8f55b231"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
