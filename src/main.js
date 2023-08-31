import { createApp } from 'vue'
import './scss/style.css'
import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

import customComponents from './plugins/custom-components'

const vfm = createVfm({})
const app = createApp(App)

app.use(vfm)

app.use(customComponents, {
  prefix: 'academy'
})

app.use(router)
app.mount('#app')