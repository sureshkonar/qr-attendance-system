// firebase.js (module) - place in repo root
// IMPORTANT: Replace firebaseConfig values with your project's config.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-cRwUJ8zcb1pWbToYXMtZg76vjhTMUPs",
  authDomain: "attendance-system-b1d37.firebaseapp.com",
  projectId: "attendance-system-b1d37",
  storageBucket: "attendance-system-b1d37.firebasestorage.app",
  messagingSenderId: "298377818582",
  appId: "1:298377818582:web:48222962ad7981828f3477"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore DB for other modules
export { db };
