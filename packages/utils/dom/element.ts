import { isString } from '../tools/types'
import { isClient } from '../tools/browser'

type GetElement = <T extends string | HTMLElement | Window | null | undefined>(
  target: T
) => T extends string ? HTMLElement | null : T

export const getElement = ((
  target: string | HTMLElement | Window | null | undefined
) => {
  if (!isClient || target === '') return null
  if (isString(target)) {
    try {
      return document.querySelector<HTMLElement>(target)
    } catch {
      return null
    }
  }
  return target
}) as GetElement
