import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT8G6-tLNkusP1UpAe8Ix5rqE_7Yjb4Ok",
  authDomain: "my-notes-app-224e4.firebaseapp.com",
  projectId: "my-notes-app-224e4",
  storageBucket: "my-notes-app-224e4.appspot.com",
  messagingSenderId: "447538367879",
  appId: "1:447538367879:web:ea462636db079dc6585722",
};

const app = initializeApp(firebaseConfig);

//Services
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);

export { auth, app, db, storage };
