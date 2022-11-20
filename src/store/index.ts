import { useLoginStore } from './login/login'
import { createPinia } from 'pinia'
import type { App } from 'vue'
const pinia = createPinia()
function registerStore(app: App<Element>) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.localCacheAction()
}
export default registerStore
