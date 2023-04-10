export class AuthLoginResponseDto {
    email: string;
    verified: boolean;
    token: string;

    constructor(
        email: string,
        verified: boolean,
        token: string) 
    {
        this.email = email;
        this.verified = verified;
        this.token = token;
    }
}