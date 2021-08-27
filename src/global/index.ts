import { registerElementComponents } from './register-elementPlus'
import { App } from 'vue'
export function globalRegister(app: App) {
  //   registerElementComponents(app)
  app.use(registerElementComponents)
}
