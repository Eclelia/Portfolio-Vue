<template>
  <v-card flat class="rounded-xl border-lg bg-surface-variant main-card">
    <v-card-title class="bg-surface-variant-light" height="2.5rem">
      <div class="d-flex justify-end align-center">
        <div v-for="n in 3" :key="n" class="circle bg-surface-variant"></div>
      </div>
    </v-card-title>

    <v-card-text class="pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>
</template>

<style scoped>
  .circle {
    margin: 5px 2px; /*à transfo en langage du framework*/
    width: 14px;
    height: 14px;
    border: 2px solid;
    border-radius: 50%;
  }

  .main-card{
    min-height: 100px;
    min-width: 100px;
    height: 75vh;
    margin-left: -30%;
  }
</style>