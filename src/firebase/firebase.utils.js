import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyByEhS0oYUtsy5jlAt1eQvm7O9xXlaqzPA",
    authDomain: "crown-db-793bd.firebaseapp.com",
    projectId: "crown-db-793bd",
    storageBucket: "crown-db-793bd.appspot.com",
    messagingSenderId: "20509932526",
    appId: "1:20509932526:web:ca7f06e26fc43ca9eb6cff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

