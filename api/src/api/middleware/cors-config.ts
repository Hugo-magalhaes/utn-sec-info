import cors from "cors";

const ERROR_CORS = "Blocked by CORS"

const options = {
    origin: (origin: any, callback: any) => {
        if (origin && origin != process.env.UI_URL) {
            return callback(new Error(ERROR_CORS));
        }

        callback(null, true);
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
};

export default cors(options);