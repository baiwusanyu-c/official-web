import { createApp } from 'vue'
import {router} from './router/router'
import App from './App.vue'
import BeUI from '../public/be-ui/be-ui.es.js'
import '../public/be-ui/style.css'
import {i18n} from "./utils/i18n";
import '../node_modules/animate.css/animate.css'
const app = createApp(App)
app.use(BeUI)
app.use(router)
app.use(i18n)
app.mount('#app')