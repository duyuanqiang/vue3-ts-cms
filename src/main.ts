import { createApp, App } from 'vue'
import routeApp from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
const app: App = createApp(routeApp)
// globalRegister(app)
app.use(globalRegister) //内部源码会做转换
app.use(store)
app.use(router)
app.mount('#app')
