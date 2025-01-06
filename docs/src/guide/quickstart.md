---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 limo-ui。

## 用法

### 前置条件

1. **limo-ui** 是一个基于 **Vue 3** 的 **UI 私有组件库**，下载前请查询 **npm registry** 地址是否是私有库或私有库 group 地址：

```shell
npm get registry
```

2. 如果 **registry** 地址不是私有库或私有库 group 地址，有以下两种方法设置：

- _方法 1：查看或创建 .npmrc 文件_（**推荐**）

```shell
registry=http://npm.xxx.com/repository/npm-group/
```

- _方法 2：直接修改 npm registry 地址_

```shell
npm set registry http://npm.xxx.com/repository/npm-group/
#or
pnpm | npm  i limo-ui --registry=http://npm.xxx.com/repository/npm-group/

```

### 使用包管理器

**建议使用包管理器（pnpm）安装 limo-ui**
::: code-group

```shell [pnpm]
$ pnpm install limo-ui
```

```shell [npm]
$ npm install limo-ui --save
```

```shell [yarn]
$ yarn add limo-ui
```

:::

#### 完整引入

```ts
// main.ts
import { createApp } from 'vue'
import LimoUi from 'limo-ui'
import 'limo-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(LimoUi)
app.mount('#app')
```

#### 按需引入

按需引入插件(LimoUiResolver)开发中，目前暂不支持
