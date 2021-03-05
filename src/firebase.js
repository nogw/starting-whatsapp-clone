import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAYhnxSNeadaPqUfeGqyGL9J6SobjSX6J0",
  authDomain: "whatsapp-clone-react-86917.firebaseapp.com",
  projectId: "whatsapp-clone-react-86917",
  storageBucket: "whatsapp-clone-react-86917.appspot.com",
  messagingSenderId: "527683638096",
  appId: "1:527683638096:web:28bc5c0dba9981cd6c5255",
  measurementId: "G-5YM5VM80FH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
export { provider };

export default database;