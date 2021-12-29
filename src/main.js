import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App)
.use(ElementPlus, {size: 'small'})
.use(Vant)
.use(router)
.mount('#app')
