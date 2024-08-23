<script setup>
  const props = defineProps({
    title : String,
    subtitle : String
  })
</script>

<template>
    <h1 class = "text-h1 text-break">{{title || "Title"}}</h1>
          <v-col cols="9">
            <p class="subtitle">{{subtitle || "Subtitle"}}</p>
            <v-btn color="secondary" class="about-me-btn">Show More</v-btn>
          </v-col>
</template>