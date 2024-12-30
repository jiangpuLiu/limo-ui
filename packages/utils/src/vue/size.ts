import { componentSizeMap } from '@limo-ui/constants'

import type { ComponentSize } from '@limo-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
