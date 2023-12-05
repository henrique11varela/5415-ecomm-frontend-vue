import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router.js'
import './style.css'
import App from './App.vue'

const app = createApp(App) // create the app instance
const pinia = createPinia() // create the pinia instance

app.use(router) // install the router
app.use(pinia) // install pinia
app.mount('#app') // mount the app
