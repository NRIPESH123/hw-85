import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCpvf8U57xe_83I1y1mClW5XTRdr0gjS6E",
  authDomain: "e-librarey.firebaseapp.com",
  projectId: "e-librarey",
  storageBucket: "e-librarey.appspot.com",
  messagingSenderId: "809455790409",
  appId: "1:809455790409:web:21816f7a679e7916935298"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
