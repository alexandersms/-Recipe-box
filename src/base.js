import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0Ibnzw5duGcamqeRqplxAjVAs2BN7ojg",
  authDomain: "recettes-app-da731.firebaseapp.com",
  databaseURL: "https://recettes-app-da731.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
