import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnnEfE5geRSgA4JxnxxbxZ6xw2kTV5mj8",
  authDomain: "clone-1dafd.firebaseapp.com",
  projectId: "clone-1dafd",
  storageBucket: "clone-1dafd.appspot.com",
  messagingSenderId: "233657725540",
  appId: "1:233657725540:web:8ca54cf7d640da52032571",
  measurementId: "G-ZTM4R8C3G8",
});

//const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth };
