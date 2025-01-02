import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import LimoUi from 'limo-ui'
import { globals } from '../vitepress'
import CustomeHome from './CustomeHome.vue'
// 全量引入element-plus
import type { EnhanceAppContext } from 'vitepress'
import 'element-plus/dist/index.css'
import 'limo-ui/dist/index.css'
// 全局样式
import './style.scss'

export default Object.assign({}, Theme, {
  extends: Theme,
  Layout: CustomeHome,
  enhanceApp: ({ app }: EnhanceAppContext) => {
    // 注册element-plus
    app.use(ElementPlus)
    app.use(LimoUi)
    // 全局引入vp-demo组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
