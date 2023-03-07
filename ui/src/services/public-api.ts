import { HttpHandler } from './http-handler'

const verifyApiHealthCheck = () => HttpHandler.get(`/`)

export {
    verifyApiHealthCheck
}