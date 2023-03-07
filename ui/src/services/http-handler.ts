import axios from 'axios'

export const HttpHandler = axios.create({
    baseURL: process.env.VUE_APP_SEC_API,
    timeout: 5000,
    withCredentials: true,
});
