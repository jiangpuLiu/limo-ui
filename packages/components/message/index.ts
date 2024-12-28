import { withInstallFunction } from '@limo-ui/utils'

import Message from './src/method'

export const LmMessage = withInstallFunction(Message, '$message')
export default LmMessage

export * from './src/message'
