<script setup>
import ContentPreview from './components/ContentPreview.vue';
import HeaderComp from './components/HeaderComp.vue';
import ContentTitle from './components/ContentTitle.vue';
</script>

<template>
  <v-app style="background-color: transparent;">
    <div class="bg-color"></div>
    <div class="grid"></div>
    <HeaderComp/>
    <main class="scroll-container">
      <v-container style="max-width: 90vw;">
        <v-row class="snap-section" align="center">
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

        <v-row class="snap-section" align="center">
          <v-col cols="5" offset="1" class="title">
            <ContentTitle :title ="'Test'" :subtitle="'Subtitle test'"/>
          </v-col>
          <v-col cols="5">
            <ContentPreview />
          </v-col>
        </v-row> 
      </v-container>
    </main>
  </v-app>
</template>

<style scoped>

header {
  line-height: 1.5;
}

.scroll-container {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
}

.snap-section {
  scroll-snap-align: start;
  height: 100vh;
}

.title{
   z-index : 100;
   margin-top: -20vh;
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
