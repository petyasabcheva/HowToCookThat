import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyDq0vLrJx5o8Wg1QgR7uUHbabGpX9uwUfU",
    authDomain: "how-to-cook-that.firebaseapp.com",
    projectId: "how-to-cook-that",
    storageBucket: "how-to-cook-that.appspot.com",
    messagingSenderId: "354448088080",
    appId: "1:354448088080:web:6628157512b70c52023e95",
    measurementId: "G-R01Q36DKVZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();