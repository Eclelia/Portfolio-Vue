<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customLightTheme" : "customDarkTheme";
};
</script>

<template>
    <v-container>
      <v-app-bar :elevation="0">
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Application Bar</v-app-bar-title>
        <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
          ></v-switch>
      </v-app-bar>
    </v-container>
</template>