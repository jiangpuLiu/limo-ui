---
title: 开发流程及示例
---

## 组件开发（components）

以开发 **Button 组件** 为例，以下是开发步骤：

1. 在 **component** 目录下创建 **button** 目录。

2. 在 **button** 目录下新建 **src** 和 **style**（根据组件需求可选择性创建）目录，**index.ts** 作为入口文件。

3. 在 **src** 目录下，创建 **Vue** 文件和 **TypeScript** 文件，完成组件的开发。对组件的 **props**、**events** 和 **slots** 等进行定义，并导出相应的类型。

4. 在 **theme/src/button.scss** 中定义 **Button** 组件的样式，并在 **index.scss** 文件中使用 `@use` 引入该样式文件。

5. **style** 目录下不能创建 **scss** 文件，所有组件的样式都在 **theme/src** 目录下统一管理。**style** 目录下只需创建 **index.ts** 文件，用于引入 **theme** 目录下的 **button.scss** 或其它公共样式文件。

6. 在 **button/index.ts** 文件中引入 **Button** 组件及其相关的 **TypeScript** 类型，并使用 **withInstall** 方法对组件进行封装，最终导出组件和类型。

7. 在 **components/index.ts** 文件中引入 **Button** 组件并导出它。

8. 在 **package/limo-ui/component.ts** 文件中引入 **Button** 组件，并在同级目录下的 **defaults.ts** 文件中统一使用 **makeInstall** 方法进行安装，最终在 **index.ts** 中统一导出组件。

9. 组件库组件必须在 **typings/global.d.ts** 文件中手动添加组件引用

## 组件库开发注意点

- 该库属于 **私有库**，npm 必须更改 **registry 地址** 为私有库地址，具体配置可在 **.npmrc** 文件中进行设置。

- 组件库的组件开发完毕 **组件添加** 必须在 **typings/global.d.ts** 文件中手动添加组件引用，确保在项目中全局识别和类型提示。

- 代码提交时必须遵循 **cz 规范提交**，即使用脚本指令中的 **commit 提交**（`pnpm run commit`），保证提交信息符合规范。

- 组件库推送时可使用脚本指令中的 **`pnpm run publish`**。提交前必须检查 **packages/limo-ui/package.json** 文件中的 **version** 版本号，确保版本号与私有库发布已有版本号不重复。

- 组件库中的组件代码提示文件位于打包后的根目录下 **dist/limo-ui**，具体文件包括：

  - **web-types.json**
  - **tags.json**
  - **attributes.json**

  这些文件依赖于 **docs/src/component-help** 目录下的 **md 文档** 生成，后续会有详细说明文件的作用。
