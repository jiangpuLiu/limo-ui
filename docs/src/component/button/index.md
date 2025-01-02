---
title: Button 按钮
lang: zh-CN
---

# Button 按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

button/basic

:::

## Button API

### Button 属性

| 属性名               | 说明                                       | 类型                                                                                             | 默认值     |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| size              | 尺寸                                       | ^[enum]`'large' \| 'default' \| 'small'`                                                     | —       |
| type              | 类型                                       | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)` | —       |
| plain             | 是否为朴素按钮                                  | ^[boolean]                                                                                     | false   |
| text ^(2.2.0)     | 是否为文字按钮                                  | ^[boolean]                                                                                     | false   |
| bg ^(2.2.0)       | 是否显示文字按钮背景颜色                             | ^[boolean]                                                                                     | false   |
| link ^(2.2.1)     | 是否为链接按钮                                  | ^[boolean]                                                                                     | false   |
| round             | 是否为圆角按钮                                  | ^[boolean]                                                                                     | false   |
| circle            | 是否为圆形按钮                                  | ^[boolean]                                                                                     | false   |
| loading           | 是否为加载中状态                                 | ^[boolean]                                                                                     | false   |
| loading-icon      | 自定义加载中状态图标组件                             | ^[string] / ^[Component]                                                                       | Loading |
| disabled          | 按钮是否为禁用状态                                | ^[boolean]                                                                                     | false   |
| icon              | 图标组件                                     | ^[string] / ^[Component]                                                                       | —       |
| autofocus         | 原生 `autofocus` 属性                        | ^[boolean]                                                                                     | false   |
| native-type       | 原生 type 属性                               | ^[enum]`'button' \| 'submit' \| 'reset'`                                                     | button  |
| auto-insert-space | 自动在两个中文字符之间插入空格                          | ^[boolean]                                                                                     | —       |
| color             | 自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色 | ^[string]                                                                                      | —       |
| dark              | dark 模式, 意味着自动设置 `color` 为 dark 模式的颜色    | ^[boolean]                                                                                     | false   |
| tag ^(2.3.4)      | 自定义元素标签                                  | ^[string] / ^[Component]                                                                       | button  |

### Button 插槽

| 插槽名     | 说明       |
| ------- | -------- |
| default | 自定义默认内容  |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件  |

### Button Expose

| 属性名            | 说明            | 类型                                                                                                                          |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ref            | 按钮 html 元素    | ^[object]`Ref<HTMLButtonElement>`                                                                                     |
| size           | 按钮尺寸          | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                      |
| type           | 按钮类型          | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | 按钮已禁用         | ^[object]`ComputedRef<boolean>`                                                                                       |
| shouldAddSpace | 是否在两个字符之间插入空格 | ^[object]`ComputedRef<boolean>`                                                                                       |

## ButtonGroup API

### ButtonGroup 属性

| 属性名  | 说明             | 类型                                                                     | 默认值 |
| ---- | -------------- | ---------------------------------------------------------------------- | --- |
| size | 用于控制该按钮组内按钮的大小 | ^[enum]`'large' \| 'default' \| 'small'`                             | —   |
| type | 用于控制该按钮组内按钮的类型 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —   |

### ButtonGroup 插槽

| 插槽名     | 说明       | 子标签    |
| ------- | -------- | ------ |
| default | 自定义按钮组内容 | Button |
