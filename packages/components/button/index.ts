import { withInstall, withNoopInstall } from '@limo-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import type { SFCWithInstall } from '@limo-ui/utils'

export const LmButton: SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
} = withInstall(Button, {
  ButtonGroup,
})
export const LmButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withNoopInstall(ButtonGroup)
export default LmButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
