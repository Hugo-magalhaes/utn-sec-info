<template>
  <v-app :theme="theme">
    <v-app-bar>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/more">More</router-link>
      </nav>
      <v-spacer></v-spacer>

      <v-btn @click="toggleTheme">
        Toggle Theme
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
import { ref } from 'vue'
import { Themes } from '@/plugin/vuetify/Themes'

const theme = ref(Themes.Light)

const toggleTheme = () => {
  theme.value = theme.value === Themes.Light ? Themes.Dark : Themes.Light
}

</script>

<style lang="scss" scoped>
</style>
