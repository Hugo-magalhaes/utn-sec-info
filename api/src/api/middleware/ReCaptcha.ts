import axios from 'axios';
import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "@api/error/unauthorized-error";
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const SCORE_GOOGLE_RECAPTCHA = process.env.SCORE_GOOGLE_RECAPTCHA;
const RECAPTCHA_ERROR_VALIDATION = "Error to aprove Recaptcha";

export default async (req: Request, res: Response, next: NextFunction) => {
    const captchaURL = "https://www.google.com/recaptcha/api/siteverify";
    const TOKEN = req.headers.authorization?.split(' ')[3] ?? "";
    if (!TOKEN) {
        res.status(404).send(RECAPTCHA_ERROR_VALIDATION);
    }
    try {
        const response = await axios({
            url: captchaURL,
            method: 'POST',
            headers: { ContentType: 'application/x-www-form-urlencoded' },
            params: {
                secret: RECAPTCHA_SECRET_KEY,
                response: TOKEN
            },
        });
        const isValidToken = response && response.data && response.data.success && SCORE_GOOGLE_RECAPTCHA && response.data.score && response.data.score > SCORE_GOOGLE_RECAPTCHA;
        isValidToken ? next() : res.status(404).send(RECAPTCHA_ERROR_VALIDATION)
    }
    catch (err: any) {
        console.error(err);
        next(new UnauthorizedError("Unauthorized", err));
    }
}
