import './assets/main.css'

// 减少差异性
import 'normalize.css'


// 引入iconfont
import './style/index.scss'

// 自定义css
import './style/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入需要的组件
import { NoticeBar, Swipe, SwipeItem, Search, Tabbar, TabbarItem } from 'vant'
// vant样式
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)

// 公告组件
app.use(NoticeBar)

// 轮播组件
app.use(Swipe)
app.use(SwipeItem)

// 搜索框组件
app.use(Search)

// 底部栏组件
app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')
