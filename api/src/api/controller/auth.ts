import { Request, Response, NextFunction } from "express";
import { authLogin, AuthLoginRequestDto } from "@application/auth-login";

const CheckLogin = (request: Request, response: Response, next: NextFunction) => response.send();

const Login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const requestDto = new AuthLoginRequestDto(
            request.body.name,
            request.body.password
        );

        const dto = await authLogin(requestDto);
        response.send(dto);
    }
    catch (err)
    {
        next(err);
    }
}

export {
    CheckLogin,
    Login
}