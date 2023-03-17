export class UserLoginResponseDto {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}