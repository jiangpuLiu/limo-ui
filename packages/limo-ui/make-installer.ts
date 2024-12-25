import { INSTALLED_KEY } from '@limo-ui/constants'
import { version } from './version'

import type { App, Plugin } from 'vue'

// 扩展 App 接口，使其包含 INSTALLED_KEY 属性
declare module 'vue' {
  interface App {
    [INSTALLED_KEY]?: boolean
  }
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    // 使用类型断言解决 unique symbol 的访问问题
    if ((app as any)[INSTALLED_KEY]) return // 设置 INSTALLED_KEY，标记已安装
    ;(app as any)[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  }

  return {
    version,
    install,
  }
}
