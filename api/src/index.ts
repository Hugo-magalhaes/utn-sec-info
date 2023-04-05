import "dotenv/config";
import "reflect-metadata";
import "./aliases";
import api from "@api/server";
import {
    initFirebaseAdmin,
    initFirebaseClient
} from "@api/auth";

initFirebaseAdmin();
initFirebaseClient();
api.listen(process.env.PORT);

console.log(`Listening on port ${process.env.PORT}`);
