import { createApp } from 'vue'
import router from '@/router'
import 'regenerator-runtime/runtime'
import App from './App.vue'

import './assets/styles/main.scss'

createApp(App).use(router).mount('#app')
