import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBv9ivkLus4-RJPiAxJI-O3z5oI4t6cZA",
  authDomain: "socialapp1-a0b76.firebaseapp.com",
  databaseURL: "https://socialapp1-a0b76.firebaseio.com",
  projectId: "socialapp1-a0b76",
  storageBucket: "socialapp1-a0b76.appspot.com",
  messagingSenderId: "873541135489"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
