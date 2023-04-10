import { HttpHandler } from '@/services/http-handler';

const logIn = (data: LogInRequest) => HttpHandler.put(`/auth/login`, data);

class LogInRequest {
    name: string|null
    password: string|null

    constructor(name: string|null = null, password: string|null = null) {
        this.name = name;
        this.password = password;
    }
}

export {
    logIn,
    LogInRequest
}