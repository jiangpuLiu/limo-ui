import { withInstall } from '@limo-ui/utils'

import ConfigProvider from './src/config-provider'
import type { SFCWithInstall } from '@limo-ui/utils'

export const LmConfigProvider: SFCWithInstall<typeof ConfigProvider> =
  withInstall(ConfigProvider)
export default LmConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
