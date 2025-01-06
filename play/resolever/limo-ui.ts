import type {
  ComponentInfo,
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components/types'
import { existsSync } from 'fs'
import path from 'path'
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
export interface LimoUIResolverOptions {
  /**
   * 导入样式类型: 'css' 或 'scss'
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * 服务端渲染支持
   */
  ssr?: boolean

  /**
   * 自动导入指令
   */
  directives?: boolean

  /**
   * 排除解析的组件名称
   */
  exclude?: any

  /**
   * 无样式组件列表
   */
  noStylesComponents?: string[]

  nightly?: boolean
}

type LimoUIResolverOptionsResolved = Required<
  Omit<LimoUIResolverOptions, 'exclude'>
> &
  Pick<LimoUIResolverOptions, 'exclude'>

function getSideEffects(
  dirName: string,
  options: LimoUIResolverOptionsResolved
): SideEffectsInfo | undefined {
  const { importStyle, ssr, nightly } = options
  const themeFolder = nightly ? '@limo-ui/nightly/theme' : 'limo-ui/theme'
  const esComponentsFolder = nightly
    ? '@limo-ui/nightly/es/components'
    : 'limo-ui/es/components'

  const getFilePath = (folder: string, fileName: string) =>
    path.resolve(folder, fileName)

  if (importStyle === 'sass') {
    const baseFile = ssr
      ? `${themeFolder}/src/base.scss`
      : `${esComponentsFolder}/base/style/index`
    const componentFile = ssr
      ? `${themeFolder}/src/${dirName}.scss`
      : `${esComponentsFolder}/${dirName}/style/index`

    if (
      existsSync(getFilePath(themeFolder, `src/base.scss`)) &&
      existsSync(getFilePath(themeFolder, `src/${dirName}.scss`))
    ) {
      return [baseFile, componentFile]
    }
  } else if (importStyle === true || importStyle === 'css') {
    const baseFile = ssr
      ? `${themeFolder}/base.css`
      : `${esComponentsFolder}/base/style/css`
    const componentFile = ssr
      ? `${themeFolder}/lm-${dirName}.css`
      : `${esComponentsFolder}/${dirName}/style/css`

    if (
      existsSync(getFilePath(themeFolder, 'base.css')) &&
      existsSync(getFilePath(themeFolder, `lm-${dirName}.css`))
    ) {
      return [baseFile, componentFile]
    }
  }
}

/**
 * 解析组件
 */
function resolveComponent(
  name: string,
  options: Required<LimoUIResolverOptions>
): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return

  if (!name.match(/^Lm[A-Z]/)) return // 匹配 Lm 前缀

  const componentName = kebabCase(name.slice(2)) // LmButton -> button

  return {
    name,
    from: 'limo-ui',
    sideEffects: getSideEffects(componentName, options),
  }
}

/**
 * 解析指令
 */
function resolveDirective(
  name: string,
  options: Required<LimoUIResolverOptions>
): ComponentInfo | undefined {
  if (!options.directives) return

  const directives: Record<string, { importName: string; styleName: string }> =
    {
      Tooltip: { importName: 'LmTooltipDirective', styleName: 'tooltip' },
    }

  const directive = directives[name]
  if (!directive) return

  return {
    name: directive.importName,
    from: 'limo-ui',
    sideEffects: getSideEffects(directive.styleName, options),
  }
}

/**
 * Resolver for Limo UI
 */
export function LimoUIResolver(
  options: LimoUIResolverOptions = {}
): ComponentResolver[] {
  const defaultOptions: Required<LimoUIResolverOptions> = {
    importStyle: 'css',
    ssr: false,
    directives: true,
    exclude: '',
    noStylesComponents: [],
    nightly: false,
    ...options,
  }

  return [
    {
      type: 'component',
      resolve: (name: string) => resolveComponent(name, defaultOptions),
    },
    {
      type: 'directive',
      resolve: (name: string) => resolveDirective(name, defaultOptions),
    },
  ]
}
