import { ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

export function outTipDialog(
  preData: any = {},
  upData: any = {},
  callback?: (action: Action) => void,
  cancelCallback?: (action: Action) => void,
  title: string = '提示',
  message: string = '数据<span style="color:#F56C6C;">未保存</span>，是否退出编辑？',
  otherProps: Record<string, any> = {}
) {
  const data = JSON.parse(JSON.stringify(upData))
  if (JSON.stringify(data) === JSON.stringify(preData)) {
    callback && callback('confirm')
  } else {
    ElMessageBox.confirm(message, title, {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      dangerouslyUseHTMLString: true,
      ...otherProps,
    })
      .then(() => {
        callback && callback('confirm')
      })
      .catch(() => {
        cancelCallback && cancelCallback('cancel')
      })
  }
}
