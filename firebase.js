import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpHrBbeLRjSCylNgof00-IV4HLo9RvJuc",
  authDomain: "carrot-market-f03e3.firebaseapp.com",
  databaseURL:
    "https://carrot-market-f03e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-f03e3",
  storageBucket: "carrot-market-f03e3.appspot.com",
  messagingSenderId: "218777015080",
  appId: "1:218777015080:web:20befafb487992f4ab361d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
