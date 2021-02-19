import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCAaWqiKj9MJ_bsiEcN0h_2-XkFSSO7zpA",
    authDomain: "crud-c47c8.firebaseapp.com",
    projectId: "crud-c47c8",
    storageBucket: "crud-c47c8.appspot.com",
    messagingSenderId: "272297501139",
    appId: "1:272297501139:web:1983f1bca032bb1dd18f26"
  }


export const firebaseApp = firebase.initializeApp(firebaseConfig)