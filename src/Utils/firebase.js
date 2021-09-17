import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC8oqM4AEAk7IaPlL2mDqdtK8X-6K1IUJc",
    authDomain: "wbhs-support.firebaseapp.com",
    projectId: "wbhs-support",
    storageBucket: "wbhs-support.appspot.com",
    messagingSenderId: "414173409399",
    appId: "1:414173409399:web:e320a793320e8055cf9672",
    measurementId: "G-BVFQ19TRX3"
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
