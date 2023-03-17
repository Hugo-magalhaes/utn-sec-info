<template>
  <v-app :theme="auth.theme">
    <v-app-bar v-if="auth.isLogged">
      <nav>
        <v-btn @click="auth.toggleTheme">
          Toggle Theme
        </v-btn>
      </nav>
      <v-spacer></v-spacer>

      <v-btn @click="auth.logout">
        Log out
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth-store';
import { onMounted } from 'vue';

const auth = useAuthStore();

onMounted(async () => {
  auth.checkLogin();
})

</script>

<style lang="scss" scoped>
</style>
