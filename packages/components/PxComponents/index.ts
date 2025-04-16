import { withInstall } from '@limo-ui/utils'
import Dialog from './Dialog/index.vue'
// import Empty from './PxEmpty/index.vue'
// import Table from './PxTable/index.vue'
import type { SFCWithInstall } from '@limo-ui/utils'

export const PxDialog: SFCWithInstall<typeof Dialog> = withInstall(Dialog)
// export const PxEmpty: SFCWithInstall<typeof Empty> = withInstall(Empty)
// export const PxTable: SFCWithInstall<typeof Table> = withInstall(Table)
export type { DialogInstance } from './Dialog/instance'
// export type { PxEmptyInstance } from './PxEmpty/instance'
// export type { PxTableInstance } from './PxTable/instance'
