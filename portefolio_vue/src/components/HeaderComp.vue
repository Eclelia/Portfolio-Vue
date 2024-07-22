<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { mdiLinkedin , mdiGithub } from '@mdi/js'

const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customLightTheme" : "customDarkTheme";
};
</script>

<template>
      <v-app-bar :elevation="0">
        <template v-slot:append>
          <v-switch
            inset
            class="d-flex align-center"
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
          ></v-switch>
          <v-btn :icon="mdiGithub" />
          <v-btn :icon="mdiLinkedin " />
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Célia Dennetiere</v-app-bar-title>
      </v-app-bar>
</template>