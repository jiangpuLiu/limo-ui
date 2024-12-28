import installer from './defaults'
export * from '@limo-ui/components'
export * from '@limo-ui/constants'
export * from '@limo-ui/directives'
export * from '@limo-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
