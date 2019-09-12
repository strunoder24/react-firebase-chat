import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCR5a5wf_UXKSzRwQF1uTy_GRlDf1nA9eU",
    authDomain: "react-chat-7c056.firebaseapp.com",
    databaseURL: "https://react-chat-7c056.firebaseio.com",
    projectId: "react-chat-7c056",
    storageBucket: "react-chat-7c056.appspot.com",
    messagingSenderId: "213551312078",
    appId: "1:213551312078:web:46b0520ef23b1206b3349f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
