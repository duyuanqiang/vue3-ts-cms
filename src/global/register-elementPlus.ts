import { ElButton, ElAlert } from 'element-plus'
import { App } from 'vue'
const components = [ElButton, ElAlert]
export function registerElementComponents(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
