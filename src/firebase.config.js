import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAmp8iST64iMb5-wHGCjka1pIYf4C-YD98",
    authDomain: "restaurantapp-ebb68.firebaseapp.com",
    databaseURL: "https://restaurantapp-ebb68-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ebb68",
    storageBucket: "restaurantapp-ebb68.appspot.com",
    messagingSenderId: "1073734334595",
    appId: "1:1073734334595:web:c5f56a6e7c9e876a8743b6"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage};