---
title: 简介
---

## 目录简介

```markdown
|– docs // 文档相关文件夹
| |– .gitignore // Git 忽略配置文件，指定不需要上传到仓库的文件或目录
| |– index.md // 文档首页 Markdown 文件
| |– package.json // 文档项目的依赖配置文件
| |– .vitepress // VitePress 配置文件夹（用于文档网站搭建）
| | |– config.mts // VitePress 主配置文件，使用 TypeScript 编写
| | |– configs // 额外配置文件目录，例如导航栏、侧边栏等配置
| | |– plugins // VitePress 插件目录，存放扩展功能代码
| | |– theme // 文档主题目录，用于自定义主题样式和布局
| | |– utils // 工具函数目录，供文档网站使用
| | |– vitepress // VitePress 核心配置或扩展相关代码
| |– examples // 示例代码目录，展示组件或功能的具体用法
| |– public // 公共资源目录，例如图片、字体等静态资源
| |– src // 文档页面源码目录
| |– component // 组件文档目录，介绍各组件功能和使用方法
| |– component-help // 组件辅助文档目录，提供辅助性说明或指南
| |– guide // 指南文档目录，详细描述使用说明或开发规范
|– internal // 内部构建和开发配置目录
| |– build // 构建相关脚本，例如打包和发布配置
| |– build-constants // 构建常量配置目录，用于存储全局常量
| |– build-utils // 构建工具目录，包含辅助函数和工具代码
| |– eslint-config // ESLint 配置目录，用于代码规范检查
| |– metadata // 元数据管理目录，例如组件信息或版本控制数据
|– packages // 各类模块和包目录
| |– components // 组件模块目录，存放具体组件代码
| |– constants // 常量模块目录，存放通用常量配置
| |– directives // 指令模块目录，定义自定义指令代码
| |– hooks // Hooks 模块目录，存放可复用的逻辑处理代码
| |– limo-ui // 主 UI 库目录，存放核心组件库代码
| | |– component.ts // 组件注册配置文件
| | |– defaults.ts // 默认配置和导出项
| | |– index.ts // UI 库入口文件，导出所有模块和组件
| | |– make-installer.ts // 安装器生成文件，用于安装组件库
| | |– package.json // UI 库模块的依赖配置
| | |– plugin.ts // 插件扩展配置文件
| | |– version.ts // 版本信息管理文件
| |– theme // 主题模块目录，自定义样式和主题相关代码
| |– utils // 工具模块目录，存放常用工具函数
|– patches // 补丁文件目录，用于第三方依赖修复或兼容性调整
|– play // 演示和测试目录，包含可交互示例和沙盒环境
|– scripts // 脚本文件目录，用于自动化任务（如构建、发布等）
|– typings // 类型声明目录，存放 TypeScript 类型定义文件
```

## 根目录脚本指令说明

```markdown
"scripts": {
"cz": "czg", // 使用 czg 交互式生成提交信息（基于 commitizen）
"dev": "pnpm -C play dev", // 启动 play 演示环境进行开发调试
"commit": "git add . && pnpm run cz", // 提交代码前自动添加所有更改并运行提交信息生成工具
"publish": "./scripts/publish.sh", // 执行发布脚本，打包并发布 npm 包
"update:version": "tsx scripts/update-version.ts", // 更新版本号，运行版本更新脚本
"clean": "pnpm run clean:dist && pnpm run -r --parallel clean", // 清理 dist 目录并并行清理所有子模块
"clean:dist": "rimraf dist", // 删除 dist 文件夹（清理构建产物）
"clean:node_modules": "bash ./scripts/clear-nodemodules.sh", // 清理 node_modules 目录，重新安装依赖
"build": "pnpm run -C internal/build start", // 启动构建流程（核心打包入口）
"build:utils": "pnpm --filter @limo-ui/utils build", // 构建 utils 工具包模块
"build:hooks": "pnpm --filter @limo-ui/hooks build", // 构建 hooks 模块
"build:directives": "pnpm --filter @limo-ui/directives build", // 构建 directives 指令模块
"build:constants": "pnpm --filter @limo-ui/constants build", // 构建 constants 常量模块
"build:theme": "pnpm run -C packages/theme build", // 构建主题模块
"format": "prettier --write --cache .", // 使用 Prettier 格式化所有代码并缓存结果
"lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx,.md,.json --max-warnings 0 --cache", // 使用 ESLint 对代码进行语法检查并缓存结果
"lint:fix": "pnpm run lint --fix", // 自动修复 ESLint 检查发现的问题
"lint:commit": "commitlint --from $(git merge-base origin/develope HEAD) --to HEAD > ./commit-lint.txt", // 检查提交记录是否符合规范并导出结果
"typecheck": "run-p typecheck:web typecheck:play typecheck:node typecheck:vite-config", // 并行执行多环境的类型检查
"typecheck:web": "vue-tsc -p tsconfig.web.json --composite false --noEmit", // 检查 web 模块的类型
"typecheck:node": "tsc -p tsconfig.node.json --noEmit", // 检查 Node.js 模块的类型
"typecheck:play": "vue-tsc -p tsconfig.play.json --composite false --noEmit", // 检查 play 演示环境的类型
"typecheck:vite-config": "vue-tsc -p tsconfig.vite-config.json --composite false --noEmit", // 检查 Vite 配置的类型
"docs:dev": "pnpm run -C docs dev", // 启动文档开发环境
"docs:build": "pnpm run -C docs build", // 构建文档静态站点
"stub": "pnpm run -r --parallel stub", // 并行生成模块的存根文件（占位符文件）
"prepare": "husky", // 配置 Husky 钩子，执行提交前钩子操作
"postinstall": "pnpm stub" // 安装依赖后自动运行 stub 脚本
}
```
