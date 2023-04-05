import { NextFunction, Request, Response } from "express";
import { ValidationError } from "@application/validation-error";
import { UnauthorizedError } from "@api/error/unauthorized-error";
import { ForbiddenError } from "@api/error/forbidden-error";

const ERROR_GENERIC = "Unexpected error, contact your admin.";

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err) {
        return next();
    }

    console.error(err);

    if (err instanceof ValidationError) {
        return res.status(400).send(err.message)
    }

    else if (err instanceof UnauthorizedError) {
        return res.status(401).send(err.message)
    }

    else if (err instanceof ForbiddenError) {
        return res.status(403).send(err.message)
    }

    res.status(500).send(ERROR_GENERIC);
}