import { HttpHandler } from './http-handler'

const apiHealthCheck = () => HttpHandler.get(`/`);

export {
    apiHealthCheck,
}