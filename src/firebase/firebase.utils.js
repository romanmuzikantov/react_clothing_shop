import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAd6jg5ZgtpbK2THgkak06vkE1lie_ZxF0",
    authDomain: "crwn-db-1a3dd.firebaseapp.com",
    databaseURL: "https://crwn-db-1a3dd.firebaseio.com",
    projectId: "crwn-db-1a3dd",
    storageBucket: "crwn-db-1a3dd.appspot.com",
    messagingSenderId: "401417121209",
    appId: "1:401417121209:web:4c7d2dbe21c2ad17b8da68",
    measurementId: "G-08XX7Z907M"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        } catch (error) {
            console.log('Error while creating user profile', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;