---
title: 开发规范
auth: liujiangpu
---

## 简介

该组件库采用以下技术栈，确保高效的开发、良好的代码质量和易于维护的架构：

### 核心技术栈
- **Vue 3**：作为前端框架，Vue 3 提供了高效的响应式机制和灵活的组件化开发方式，适合构建现代化的用户界面。
- **TypeScript**：提供静态类型支持，增强代码的可维护性和可靠性，防止潜在的类型错误。

### 包管理
- **pnpm monorepo**：采用 monorepo 模式进行包管理，能够集中管理多个关联模块和子包，降低依赖冗余，确保版本一致性，特别适合大型组件库和工具库的模块化开发。

### 构建工具
- **Rollup**：作为现代化的 JavaScript 模块打包工具，专注于库和模块的打包。它支持 **Tree Shaking** 和 **代码分割**，能够输出多种格式（如 ESM、CJS、UMD 等），非常适合组件库的按需加载和高效打包需求。
- **Gulp**：作为自动化任务管理工具，Gulp 负责文件转换、样式编译、代码压缩等任务，提高开发和构建效率。它也可以适配复杂的自定义流程需求。
- **vitepress**：基于 **Vite** 构建的静态站点生成器，专为文档站点设计，天然集成 **Markdown**，支持自定义组件和代码示例。它不仅便于编写文档内容，还允许在 Markdown 中直接使用 Vue 组件，增强文档的交互性和演示功能。

### 代码规范
为了确保代码质量和风格一致，使用了以下工具进行管理：
- **ESLint**：用于代码语法检查和静态分析，防止潜在的编程错误，并确保团队代码风格一致。
- **Prettier**：专注于代码格式化，自动化排版和格式一致性，提升开发效率。
- **Stylelint**：专门针对 **CSS** 和 **预处理语言（如 SCSS）** 的规范检查，确保样式代码的可维护性和一致性。

## 核心模块开发说明（packages｜typings）

**主要开发目录位于根目录 `packages` 下，各模块功能划分如下：**

- **`components`** - 组件库开发目录，包含核心 UI 组件的源码与实现。
- **`constants`** - 常量管理模块，定义和管理组件库及其他模块中所需的全局常量。
- **`directives`** - 指令库开发目录，封装可复用的自定义指令。
- **`hooks`** - 钩子库开发目录，包含基于 Vue 3 Composition API 的逻辑复用工具。
- **`limo-ui`** - 组件库核心入口模块，负责组件注册、导出及安装逻辑。
- **`theme`** - 主题与样式模块，包含样式文件、主题变量及样式编译配置。
- **`utils`** - 工具函数库，提供常用工具方法和辅助函数，供其他模块复用。
- **`typings/global.d.ts`** - 组件库组件添加必须在该文件中手动添加。


## 代码提示文件说明（dist)
组件库打包后生成的以下 JSON 文件主要用于 **IDE 提示** 和 **开发者工具支持**：
### 1. **`web-types.json`**
- **作用**：
  提供组件库的类型定义、事件、插槽、方法和属性等详细描述。
  - 支持 **WebStorm**、**IntelliJ IDEA** 等 JetBrains 系列 IDE 的代码提示和自动补全功能。
  - 帮助 IDE 理解组件的 API 结构，提高开发体验。

- **常见内容**：
  - 组件名称及描述
  - 支持的属性（props）及其类型
  - 支持的事件（events）及回调参数
  - 插槽（slots）及作用域插槽（scoped slots）
  - 方法（methods）及返回值

- **示例**：
  ```json
  {
    "tags": [
      {
        "name": "LmDialog",
        "description": "对话框组件",
        "attributes": [
          {
            "name": "title",
            "description": "设置对话框标题",
            "value": {
              "type": "string"
            }
          }
        ],
        "events": [
          {
            "name": "close",
            "description": "关闭对话框事件"
          }
        ]
      }
    ]
  }
  ```

### 2. **`tags.json`**
- **作用**：
  定义组件标签名称及其支持的属性，用于 **VSCode 插件**（如 **Vetur** 或 **Volar**）的语法提示和校验。
  - 支持 HTML 标签自动补全和属性验证。
  - 提供属性类型和默认值提示，增强开发效率。

- **示例**：
  ```json
  {
    "LmButton": {
      "description": "按钮组件",
      "attributes": {
        "type": {
          "type": "string",
          "description": "按钮类型，如 'primary' 或 'danger'"
        },
        "disabled": {
          "type": "boolean",
          "description": "是否禁用按钮"
        }
      }
    }
  }
  ```

### 3. **`attributes.json`**

- **作用**：
  提供全局属性定义和补全信息。
  - 用于 IDE 的全局属性提示，通常包括通用属性（如 `class`、`style`、`id` 等）。
  - 支持跨组件的通用属性定义，便于 IDE 自动补全和类型检查。

- **示例**：
  ```json
  {
    "globalAttributes": {
      "data-testid": {
        "type": "string",
        "description": "用于测试标识"
      }
    }
  }
  ```



