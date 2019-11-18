import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyArABb1VnUolqHdayQF4Q8WvuTj21q4fHE",
    authDomain: "ecommerce-db-bfba5.firebaseapp.com",
    databaseURL: "https://ecommerce-db-bfba5.firebaseio.com",
    projectId: "ecommerce-db-bfba5",
    storageBucket: "ecommerce-db-bfba5.appspot.com",
    messagingSenderId: "270131499634",
    appId: "1:270131499634:web:ba2fcddd1a56b573a028eb",
    measurementId: "G-XTVPPF57Z3"
  };

  export const createUserProfileDocument = async(userAuth, additionalInfo) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

      try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalInfo
          })
      }catch(error){
          console.log("error", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;