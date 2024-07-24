import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBk54EroaVrd9ZdmO68q5T1W9vkWp1tMI4",
  authDomain: "digitechwebsite-a2bac.firebaseapp.com",
  projectId: "digitechwebsite-a2bac",
  storageBucket: "digitechwebsite-a2bac.appspot.com",
  messagingSenderId: "828823929905",
  appId: "1:828823929905:web:64b01f0b824392b5644110",
  measurementId: "G-BL0G1B68D3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
