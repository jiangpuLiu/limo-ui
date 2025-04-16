import { outTipDialog } from '../out-tip-dialog'
import type { PxDialogHooks } from '../types'

const usePxDialog = ({ outTip, preData, upData, emits }: PxDialogHooks) => {
  /**
   * 点击右上角关闭，或者点击Dialog以外的位置关闭Dialog
   */
  const closed = () => {
    if (outTip) {
      outTipDialog(preData, upData, () => {
        emits('closed')
      })
      return
    }
    emits('cancel')
  }
  /**
   * 取消
   */
  function cancel() {
    if (outTip) {
      outTipDialog(preData, upData, () => {
        emits('cancel')
      })
      return
    }
    emits('cancel')
  }
  /**
   * 保存
   */
  function confirm() {
    console.log('confirm')
    emits('confirm')
  }

  return {
    closed,
    cancel,
    confirm,
  }
}

export default usePxDialog
