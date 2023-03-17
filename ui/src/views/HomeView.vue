<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { verifyApiHealthCheck } from '@/services/public-api';

let message = ref("...");

onMounted(async () => {
  const response = await verifyApiHealthCheck();
  message.value = response.data.message;
})

</script>
