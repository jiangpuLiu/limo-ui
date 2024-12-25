import { Component, createApp } from 'vue'
import '@limo-ui/theme/src/dark/css-vars.scss'
import '@limo-ui/theme/src/notification.scss'
import '@limo-ui/theme/src/message-box.scss'
import '@limo-ui/theme/src/message.scss'
import App from './src/App.vue'


const app = createApp(App)
app.use(LimoUi)

app.mount('#play')
