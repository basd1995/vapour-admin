import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
import 'element-plus/dist/index.css'
import './style.css'
import antIcons from './ant-icons'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.use(antIcons)

app.mount('#app')
