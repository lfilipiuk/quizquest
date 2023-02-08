import { getDatabase } from "firebase/database";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    databaseURL: "https://flashcards-a33ae-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
