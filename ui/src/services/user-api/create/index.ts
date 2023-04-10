import { HttpHandler } from '@/services/http-handler';

const createUser = (data: CreateUserRequest) => HttpHandler.post(`/user`, data);

class CreateUserRequest {
    name: string|null
    password: string|null

    constructor(name: string|null = null, password: string|null = null) {
        this.name = name;
        this.password = password;
    }
}

export {
    createUser,
    CreateUserRequest
}