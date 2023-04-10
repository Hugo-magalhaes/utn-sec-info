import axios from 'axios';
import { useAuthStore } from '@/stores/auth-store';
import { tokenRestore } from '@/services/token-storage';

const HttpHandler = axios.create({
    baseURL: process.env.VUE_APP_SEC_API,
    timeout: 5000,
    withCredentials: true,
});

HttpHandler.interceptors.request.use(config => {
    const token = tokenRestore();
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

HttpHandler.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status != 401) return error;
        
        const auth = useAuthStore();
        auth.logout();
        
        throw Error('Login redirect');
});

export { HttpHandler };