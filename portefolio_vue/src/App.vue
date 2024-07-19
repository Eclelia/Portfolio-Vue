<script setup>
import ContentPreview from './components/ContentPreview.vue';
import HeaderComp from './components/HeaderComp.vue';
</script>

<template>
  <v-app style="background-color: transparent;">
    <div class="bg-color"></div>
    <div class="grid"></div>
    <header>
      <HeaderComp/>
    </header>
    <v-container fluid style="margin-top: 5%; max-width: 90vw;">
      <v-row>
        <v-col cols="5" offset="1" class="title">
          <h1 class = "text-h1 text-break">Célia <br>Dennetiere</h1>
          <v-col cols="9">
            <p class="subtitle">Repente adfatim consilio consilio quaeos post mirterur pagos commutatos labores ad pagos minterur.</p>
            <v-btn color="secondary" class="about-me-btn">About Me</v-btn>
          </v-col>
        </v-col>
        <v-col cols="5">
          <ContentPreview />
        </v-col>
      </v-row>    
    </v-container>
  </v-app>
</template>

<style scoped>

header {
  line-height: 1.5;
}

.title{
   z-index : 100;
   margin-top: 7%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
