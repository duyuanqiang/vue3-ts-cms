import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import './assets/main.css'
import router from './router'
import pinia from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import icons from './global/register-icons'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(icons)
// app.use(ElementPlus)
//mounted #app 是挂载到index里面的div
app.mount('#app')
