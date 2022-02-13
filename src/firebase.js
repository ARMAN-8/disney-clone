import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHMax5dNbU-KcC2oBY7ZpvoK0wG2M0d_c",
    authDomain: "disneyplus-clone-16ecd.firebaseapp.com",
    projectId: "disneyplus-clone-16ecd",
    storageBucket: "disneyplus-clone-16ecd.appspot.com",
    messagingSenderId: "293753565473",
    appId: "1:293753565473:web:f4953e0c4c152c571f8e60",
    measurementId: "G-G2FCZC5X9F"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;