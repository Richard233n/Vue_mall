import './assets/main.css'

// 减少差异性
import 'normalize.css'


// 引入iconfont
import './style/index.scss'

// 自定义css
import'./style/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
