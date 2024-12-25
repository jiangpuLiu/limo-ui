import { componentSizes, datePickTypes } from '@limo-ui/constants'
import type { ComponentSize, DatePickType } from '@limo-ui/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)
