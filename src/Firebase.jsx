import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAChoWKCk6nrlAC9EohzzDNN2M2dmyf-2w",
  authDomain: "fir-auth-754c3.firebaseapp.com",
  projectId: "fir-auth-754c3",
  storageBucket: "fir-auth-754c3.firebasestorage.app",
  messagingSenderId: "575605162735",
  appId: "1:575605162735:web:4ce4f8b6f5241f2234d11a",
  measurementId: "G-8QVDL8D8EH"   
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);