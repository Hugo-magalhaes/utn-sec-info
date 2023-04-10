import { AuthLoginRequestDto } from "./auth-login-request-dto";
import { AuthLoginResponseDto } from "./auth-login-response-dto";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ValidationError } from "@application/validation-error";

const authLogin = async (dto: AuthLoginRequestDto): Promise<AuthLoginResponseDto> => {
    if (!dto.email || !dto.password) {
        throw new ValidationError("The email and password are required values.");
    }
    
    const auth = getAuth();
    const sigInResponse = await signInWithEmailAndPassword(auth, dto.email, dto.password);
    const token = await sigInResponse.user.getIdToken();

    return new AuthLoginResponseDto(
        dto.email,
        sigInResponse.user.emailVerified,
        token);
}

export {
    authLogin,
    AuthLoginRequestDto,
    AuthLoginResponseDto
}