<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { verifyApiHealthCheck } from '@/services/public-api'

let message = ref("...");

onMounted(async () => {
  try {
    const response = await verifyApiHealthCheck()
    message.value = response.data.message
  } catch (exception) {
    console.error(exception)
  }
})

</script>
