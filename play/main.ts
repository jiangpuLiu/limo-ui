import { Component, createApp } from 'vue'
import 'virtual:uno.css'
import '@limo-ui/theme/src/dark/css-vars.scss'
import '@limo-ui/theme/src/notification.scss'
import '@limo-ui/theme/src/message-box.scss'
import '@limo-ui/theme/src/message.scss'
import VxeUIAll from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'
;(async () => {
  const apps = import.meta.glob<
    true,
    string,
    () => Promise<{ default: Component }>
  >('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App).use(VxeUIAll).use(VxeUITable)

  app.mount('#play')
})()
