import { Request, Response, NextFunction } from "express";
import { createUser, UserCreateRequestDto } from "@application/user-create";

const Create = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const requestDto = new UserCreateRequestDto(
            request.body.name,
            request.body.password
        );
        await createUser(requestDto);

        response.send();
    }
    catch (err)
    {
        next(err);
    }
}

export {
    Create
}