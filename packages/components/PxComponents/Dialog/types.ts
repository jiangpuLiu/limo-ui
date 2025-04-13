// import type { DialogProps } from 'element-plus'

export interface PxDialogProps {
  outTip?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  preData?: Record<string, any>
  upData?: Record<string, any>
}

export interface PxDialogEmits {
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'closed'): void
}

export interface PxDialogHooks extends PxDialogProps {
  emits: PxDialogEmits
}
