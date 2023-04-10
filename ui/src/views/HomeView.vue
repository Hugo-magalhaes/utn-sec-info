<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiHealthCheck } from '@/services/api-health-check';

let message = ref("...");

onMounted(async () => {
  const response = await apiHealthCheck();
  message.value = response.data.message;
})

</script>
