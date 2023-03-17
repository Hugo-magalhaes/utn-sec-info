import { Request, Response, NextFunction } from "express";
import healthCheck from "@application/health-check";
import userLogin from "@application/user-login";
import { UserLoginRequestDto } from "@application/user-login/user-login-request-dto";

const HealthCheck = async (request: Request, response: Response) => {
    const dto = healthCheck();
    response.send(dto);
}

const Login = (request: Request, response: Response, next: NextFunction) => {
    try {
        const requestDto = new UserLoginRequestDto(
            request.body.name,
            request.body.password
        );

        const dto = userLogin(requestDto);
        response.send(dto);
    }
    catch (err)
    {
        next(err);
    }
}

export {
    HealthCheck,
    Login
}