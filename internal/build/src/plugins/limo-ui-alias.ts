import { PKG_NAME, PKG_PREFIX } from '@limo-ui/build-constants'

import type { Plugin } from 'rollup'

export function LimoUiAlias(): Plugin {
  const themeChalk = 'theme'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: 'limo-ui-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
