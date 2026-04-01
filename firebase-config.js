import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw6VzNHRNqoOTf-ownAk9SNFwdJjdWsuY",
  authDomain: "shamm-market.firebaseapp.com",
  projectId: "shamm-market",
  storageBucket: "shamm-market.firebasestorage.app",
  messagingSenderId: "159836177145",
  appId: "1:159836177145:web:f15fa5a12322eb877b9828",
  measurementId: "G-XG89T7XEKP"
};

// Firebase-ni ishga tushiramiz
const app = initializeApp(firebaseConfig);

// BU QISMI JUDA MUHIM: 'export' so'zlari turishi shart!
export const db = getFirestore(app);
export const storage = getStorage(app);