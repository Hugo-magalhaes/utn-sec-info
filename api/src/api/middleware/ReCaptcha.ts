import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '@api/error/unauthorized-error';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const SCORE_GOOGLE_RECAPTCHA = process.env.SCORE_GOOGLE_RECAPTCHA;
const RECAPTCHA_ERROR_VALIDATION = 'Error to approve Recaptcha';
const CAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';

export default async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[3] ?? '';

    if (!token) {
        return res.status(404).send(RECAPTCHA_ERROR_VALIDATION);
    }

    try {
        const response = await axios.post(CAPTCHA_URL, null, {
            params: {
                secret: RECAPTCHA_SECRET_KEY,
                response: token
            },
        });

        const isValidToken = response?.data?.success && SCORE_GOOGLE_RECAPTCHA && response.data.score && response.data.score > SCORE_GOOGLE_RECAPTCHA;
        if (isValidToken) {
            console.log(isValidToken)
            console.log(response.data.score)
            next();
        } else {
            res.status(404).send(RECAPTCHA_ERROR_VALIDATION);
        }
    } catch (err: any) {
        console.error(err);
        next(new UnauthorizedError('Unauthorized', err));
    }
}