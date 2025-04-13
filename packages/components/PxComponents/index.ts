import { withInstall } from '@limo-ui/utils'
import Dialog from './Dialog/index.vue'
import type { SFCWithInstall } from '@limo-ui/utils'

export const PxDialog: SFCWithInstall<typeof Dialog> = withInstall(Dialog)

export type { DialogInstance } from './Dialog/instance'
