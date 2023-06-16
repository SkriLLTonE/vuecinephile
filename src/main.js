import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import VueLazyload from 'vue-lazyload'

import '@/assets/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)


import Loader from '@/components/UI/Loader.vue'

app.component('Loader', Loader)


app.mount('#app')
