<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";
import { mdiLinkedin, mdiGithub } from '@mdi/js'
import mojs from '@mojs/core';
import { gsap } from 'gsap';

const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customLightTheme" : "customDarkTheme";
};

var drawer = ref(false);
const menu = ref(null);
const idleTimeline = ref(null);

function onDrawerMounted() {
  console.log(document.querySelector("#clipPath"));
  if (drawer) {
    openMenu();
    startIdleAnimation();
  }

  TweenLite.defaultEase = Sine.easeInOut;
  TweenLite.set("g", { y: window.innerHeight / 2 });

  var svg = document.querySelector(".test");
  var wave = document.querySelector("#wave");
  var width = 800;

  var amplitude = 200;
  var frequency = 2;
  var segments = 200;
  var interval = width / segments;

  for (var i = 0; i < segments; i++) {

    var norm = i / (segments - 1);
    var point = wave.points.appendItem(svg.createSVGPoint());

    point.x = i * interval;
    point.y = amplitude / 2;

    TweenMax.to(point, 2, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);
  }
}


const openMenu = () => {
  //gsap.fromTo(menu.value, { width: 0 }, { width: 'auto', duration: 1, ease: 'power2.inOut' });
};

const closeMenu = () => {
  //gsap.to(menu.value, { width: 0, duration: 1, ease: 'power2.inOut' });
};

const startIdleAnimation = () => {
  idleTimeline.value = gsap.timeline({ repeat: -1, yoyo: true });
  idleTimeline.value.to(menu.value, { backgroundColor: '#f0f', duration: 1 });
  idleTimeline.value.to(menu.value, { backgroundColor: '#0ff', duration: 1 });
};

const stopIdleAnimation = () => {
  if (idleTimeline.value) {
    idleTimeline.value.kill();
  }
};


watch(() => drawer, (newVal) => {
  if (newVal) {
    openMenu();
    startIdleAnimation();
  } else {
    closeMenu();
    stopIdleAnimation();
  }
}
);

onUnmounted(() => {
  stopIdleAnimation();
});
</script>

<template>
  <v-app-bar :elevation="0">
    <template v-slot:append>
      <v-switch inset class="d-flex align-center" color="info" v-model="darkMode" @change="toggleTheme()"></v-switch>
      <v-btn :icon="mdiGithub" />
      <v-btn :icon="mdiLinkedin" />
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!--add un watcher sur la value de drawer pour l'anim du bouton-->
    </template>

    <v-app-bar-title>Célia Dennetiere</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer temporary v-model="drawer" ref="menu" :width="500" location="end" @vue:mounted="onDrawerMounted">
    <v-list>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <!-- Ajoutez plus d'éléments ici -->
    </v-list>
  </v-navigation-drawer>
  <svg>
    <defs>
      <clipPath id="clipPath">
        <circle cx="100" cy="100" r="500" fill="blue" />
      </clipPath>
    </defs>
  </svg>

  <svg class="test">
    <g>
      <line id="line" x1="0" x2="100%" />
      <polyline id="wave" />
    </g>
  </svg>

</template>

<style scoped>
.v-navigation-drawer {
  /*clip-path: url("#clipPath");*/
}

svg{
  position: absolute;
  right: 0;
  top: 0;
}

.test {
  width: 800px;
  height: 100%;
  padding: 50px;
}

line {
  stroke-width: 1;
  stroke: #3c3c3c;
}

#wave {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #56acf4;
}
</style>