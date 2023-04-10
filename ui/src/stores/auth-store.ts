import { defineStore } from 'pinia';
import { tokenClear, tokenSave } from '@/services/token-storage';
import { Themes } from '@/plugin/vuetify/Themes';
import { LogInRequest, logIn } from '@/services/auth-api/login';
import { checkLogin } from '@/services/auth-api/check-login';
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
    async checkLogin(): Promise<void> {
      try {
        await checkLogin();
        this.isLogged = true;
        return Promise.resolve();
      } catch(err) {
        this.logout();
        return Promise.reject();
      }
    },
    async login(payload: LogInRequest) {
      const { data } = await logIn(payload);
      tokenSave(data.token);
      this.isLogged = true;
  
      router.back();
    },
    logout() {
      tokenClear();
      this.isLogged = false;
      this.theme = Themes.Light;

      router.push('/login');
    }
  },
})