import { initializeApp } from "firebase/app";
import FirebaseAuthClientKeys from "./firebase-client-credentials.json";

const initFirebaseClient = () => {
    initializeApp(FirebaseAuthClientKeys);
}

export {
    initFirebaseClient
}