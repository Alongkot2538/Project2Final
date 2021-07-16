import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBigv1mYE7FL8BJ9-yRfgs_xDfUPR0kWRU",
  authDomain: "project-7c978.firebaseapp.com",
  projectId: "project-7c978",
  storageBucket: "project-7c978.appspot.com",
  messagingSenderId: "664476352437",
  appId: "1:664476352437:web:d1e7b4df23a7007e2be3fc",
  measurementId: "G-JMRJ4M5GFY"
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export const app = firebase.initializeApp(firebaseConfig);