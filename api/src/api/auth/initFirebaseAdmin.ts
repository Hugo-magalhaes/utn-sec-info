import { initializeApp, applicationDefault } from "firebase-admin/app";

const initFirebaseAdmin = () => {
    //applicationDefault use GOOGLE_APPLICATION_CREDENTIALS env var
    initializeApp({
        credential: applicationDefault()
    });
}

export {
    initFirebaseAdmin
}