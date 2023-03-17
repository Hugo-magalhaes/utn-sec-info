<template>
  <div class="login__container">
    <v-form
      max-with
      v-model="isValid"
      validate-on="submit"
      @submit.prevent="login"
    >
      <v-img
        cover
        height="125"
        class="mb-5"
        src="https://www.ramonarroyo.com.ar/wp-content/uploads/2016/09/frcu-300x195.png"
      >
      </v-img>
      <v-text-field
        v-model="user.name"
        :rules="userRules.name"
        :counter="10"
        label="User Name"
        required
      >
      </v-text-field>
  
      <v-text-field
        v-model="user.password"
        :rules="userRules.password"
        :counter="10"
        type="password"
        label="Password"
        required
      >
      </v-text-field>
      
      <v-btn
        block
        color="primary"
        type="submit"
        class="mt-2"
      >
        LOGIN
      </v-btn>
    </v-form>
  </div>
  <v-snackbar
    v-model="showError"
    location="top right"
    multi-line
    >
    {{ errorMessage }}

    <template v-slot:actions>
      <v-btn
        color="red"
        variant="text"
        @click="showError = false"
      >
        <b>Close</b>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';
import { UserLoginRequest } from '@/services/public-api';
import { useAuthStore } from '@/stores/auth-store';

const auth = useAuthStore();

const showError = ref(false);
const errorMessage = ref(false);
const isValid = ref(false);

const user = ref(new UserLoginRequest());

const userRules = ref({
  name: [
    (value: string) => value ? true : 'Name is requred.',
  ],
  password: [
    (value: string) => value ? true : 'Password is requred.',
  ],
});

const login = async (event: SubmitEventPromise) => {
  try {
    await event;
    if (!isValid.value) return;

    await auth.login(user.value);
  } catch(error: any) {
    showError.value = true;
    errorMessage.value = error?.response?.data ?? 'Unexpected Error. Contact your admin!';
  }
};

</script>

<style scoped>
.login__container {
  max-width: 500px;
  margin: 30px auto;
}
</style>
