import { HttpHandler } from '@/services/http-handler';

const checkLogin = () => HttpHandler.get(`/auth`);

export {
    checkLogin,
}