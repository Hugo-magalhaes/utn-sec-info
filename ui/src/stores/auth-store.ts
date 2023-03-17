import { defineStore } from 'pinia';
import { tokenRestore, tokenClear, tokenSave } from '@/services/token-storage';
import { Themes } from '@/plugin/vuetify/Themes';
import { userLogin, UserLoginRequest } from '@/services/public-api';
import router from '@/router';
  
export const useAuthStore = defineStore('useAuthStore', {
  state: () => {
    return {
        theme: Themes.Light,
        isLogged: false
    }
  },
  actions: {
    toggleTheme() {
        this.theme = this.theme === Themes.Light ? Themes.Dark : Themes.Light;
    },
    checkLogin() {
        const token = tokenRestore();
        this.isLogged = !!token;
    },
    async login(payload: UserLoginRequest) {
        const { data } = await userLogin(payload);
        tokenSave(data.token);
        this.isLogged = true;
    
        router.push('/');
    },
    logout() {
        tokenClear();
        this.isLogged = false;
        this.theme = Themes.Light;
        router.push('login');
    }
  },
})