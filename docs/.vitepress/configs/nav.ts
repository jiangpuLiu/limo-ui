import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '个人主页', link: '/' },
  { text: '指南', link: '/src/guide/quickstart.md' },
  { text: '组件库', link: '/src/component/button.md' },
]
