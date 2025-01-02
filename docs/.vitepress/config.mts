import { defineConfig } from 'vitepress'
import { mdPlugin } from './configs/plugins'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: './dist',
  title: 'Limo Ui',
  description: 'A VitePress Site',
  head,

  lastUpdated: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    i18nRouting: false,
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
