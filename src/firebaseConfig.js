import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGm3bzsCxYSARcgVn41ta_EOut9fauWr0",
  authDomain: "ecommerce-74229.firebaseapp.com",
  projectId: "ecommerce-74229",
  storageBucket: "ecommerce-74229.firebasestorage.app",
  messagingSenderId: "47160479095",
  appId: "1:47160479095:web:335ba0e7c1562d6f7ea572",
  measurementId: "G-LPZHVZ1MBZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { deleteDoc, doc };
export default app;