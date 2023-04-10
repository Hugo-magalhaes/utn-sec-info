<template>
  <h1>Creacion de usuario</h1>
  <div class="create-user__container">
    <v-form
      max-with
      v-model="isValid"
      validate-on="submit"
      @submit.prevent="createUserHandler"
    >
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
      
      <v-text-field
        v-model="repeatPassword"
        :rules="userRules.repeatPassword"
        :counter="10"
        type="password"
        label="Repeat password"
        required
      >
      </v-text-field>
  
      <v-btn
        block
        color="primary"
        type="submit"
        class="mt-2"
      >
        CREAR
      </v-btn>
    </v-form>
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
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';
import { createUser, CreateUserRequest } from '@/services/user-api/create';
import router from '@/router';

const repeatPassword = ref('');
const showError = ref(false);
const errorMessage = ref(false);
const isValid = ref(false);

const user = ref(new CreateUserRequest());

const userRules = ref({
  name: [
    (value: string) => value ? true : 'Name is requred.',
  ],
  password: [
    (value: string) => value ? true : 'Password is requred.',
  ],
  repeatPassword: [
    (value: string) => value == user.value.password ? true : 'Password must be match.',
  ],
});

const createUserHandler = async (event: SubmitEventPromise) => {
  try {
    await event;
    if (!isValid.value) return;

    await createUser(user.value);
    router.push('/');
  } catch(error: any) {
    console.error(error);
    showError.value = true;
    errorMessage.value = error?.response?.data ?? 'Unexpected Error. Contact your admin!';
  }
};

</script>

<style scoped>
.create-user__container {
  max-width: 500px;
  margin: 30px auto;
}
</style>
