import { UserLoginRequestDto } from "./user-login-request-dto";
import { UserLoginResponseDto } from "./user-login-response-dto";
import { ValidationError } from "@application/validation-error";

const STATIC_USER = 'seguridad@utn.com';
const STATIC_PASSWORD = 'seguridad';
const STATIC_TOKEN = 'a1b2c3';

export default (dto: UserLoginRequestDto): UserLoginResponseDto => {
    if (dto.name != STATIC_USER || dto.password != STATIC_PASSWORD) {
        throw new ValidationError("Invalid Credentials");
    }

    const response = new UserLoginResponseDto(STATIC_TOKEN);
    return response;
}