import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '指南',
    items: [{ text: '快速开始', link: '/src/guide/quickstart.md' }],
  },
  {
    text: '组件',
    items: [
      { text: 'Button 按钮', link: '/src/component/button.md' },
      { text: 'Icon 图标', link: '/src/component/icon.md' },
    ],
  },
]
