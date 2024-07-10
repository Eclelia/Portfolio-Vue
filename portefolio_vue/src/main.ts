import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'
import {customDarkTheme, customLightTheme} from './assets/theme'

const vuetify = createVuetify({
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
