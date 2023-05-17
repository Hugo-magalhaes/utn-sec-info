import express from "express";
import bodyParser from "body-parser";
import { PublicRouter, UserRouter, AuthRouter } from "@api/router";
import errorHandler from "@api/middleware/error-handler";
import corsConfiguration from "@api/middleware/cors-config";
import tokenValidation from "@api/middleware/token-validation";
import recaptchaValidation from "@api/middleware/ReCaptcha";

const api = express();

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(corsConfiguration);

api.use(recaptchaValidation);
api.use(PublicRouter);
api.use(AuthRouter);
api.use(tokenValidation);
api.use(UserRouter);
api.use(errorHandler);

export default api;
