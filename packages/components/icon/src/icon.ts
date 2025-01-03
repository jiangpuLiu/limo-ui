import * as icons from 'lucide-vue-next'
import type Icon from './icon.vue'

export type IconPropType = {
  name: keyof typeof icons
  size?: number
  color?: string
  strokeWidth?: number
  defaultClass?: string
  fill?: string
  absoluteStrokeWidth?: boolean
  iconNode?: any // 允许传入iconNode属性
}

export type IconProps = IconPropType
export type IconInstance = InstanceType<typeof Icon>
