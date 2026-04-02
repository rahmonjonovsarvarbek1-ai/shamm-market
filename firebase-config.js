import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
// 1. Auth modulini ham qo'shamiz
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// 2. Eksport qilinadigan qismlar
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // Auth-ni eksport qilish shart!