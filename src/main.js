import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)

app.use(Vant)
// Lazyload 指令需要单独进行注册
app.use(Vant.Lazyload)

app.mount('#app')
