import express from "express";
import bodyParser from "body-parser";
import { PublicRouter } from "@api/router";
import errorHandler from "@api/middleware/error-handler";
import corsConfiguration from "@api/middleware/cors-config";
import tokenValidation from "@api/middleware/token-validation";

const api = express();

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(corsConfiguration);

api.use(PublicRouter);
api.use(tokenValidation);
api.use(errorHandler);

export default api;
