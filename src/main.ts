import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'
import {customDarkTheme, customLightTheme} from './assets/theme'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
  theme : {
    defaultTheme : 'customDarkTheme',
    themes : {
      customDarkTheme,
      customLightTheme
    }
  }
  })

createApp(App).use(vuetify).mount('#app')
