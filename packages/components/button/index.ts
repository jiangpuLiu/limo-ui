import { withInstall } from '@limo-ui/utils'
import Button from './src/button.vue'
import type { SFCWithInstall } from '@limo-ui/utils'

export const LmButton: SFCWithInstall<typeof Button> = withInstall(Button)
export default LmButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance } from './src/instance'
