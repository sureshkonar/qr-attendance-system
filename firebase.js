// firebase.js
// This file initializes Firebase and provides the DB reference.


// ----------------------------------------------
// REPLACE WITH YOUR FIREBASE CONFIG
// ----------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB-cRwUJ8zcb1pWbToYXMtZg76vjhTMUPs",
  authDomain: "attendance-system-b1d37.firebaseapp.com",
  projectId: "attendance-system-b1d37",
  storageBucket: "attendance-system-b1d37.firebasestorage.app",
  messagingSenderId: "298377818582",
  appId: "1:298377818582:web:48222962ad7981828f3477"
};

// ----------------------------------------------
// INITIALIZE ONLY ONCE
// ----------------------------------------------
if (!firebase.apps || firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

// ----------------------------------------------
// EXPORT THE DATABASE REFERENCE
// ----------------------------------------------
const db = firebase.database();
