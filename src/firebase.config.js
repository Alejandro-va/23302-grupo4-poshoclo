// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//este paso lo cosegui en firebasedoc
import { getAuth } from "firebase/auth"; //para autenticar
//despues cree la base de dato firestoredabasse
import { getFirestore } from "firebase/firestore";
//luego cree el storage
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJHfRMlkn-DnImo2vemsbZxs2AfC4-WYw",
  authDomain: "poshoclo-d20b1.firebaseapp.com",
  projectId: "poshoclo-d20b1",
  storageBucket: "poshoclo-d20b1.appspot.com",
  messagingSenderId: "292832667420",
  appId: "1:292832667420:web:73e084a4f8d604e083fcd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//agregando lineas de codigo yo
export default app;
