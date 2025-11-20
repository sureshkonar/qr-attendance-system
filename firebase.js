// firebase.js - ES module used by other pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-cRwUJ8zcb1pWbToYXMtZg76vjhTMUPs",
  authDomain: "attendance-system-b1d37.firebaseapp.com",
  projectId: "attendance-system-b1d37",
  storageBucket: "attendance-system-b1d37.firebasestorage.app",
  messagingSenderId: "298377818582",
  appId: "1:298377818582:web:48222962ad7981828f3477"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
