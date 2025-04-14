import type { VxePagerProps } from 'vxe-pc-ui'

export interface GridTableProps {
  empty?: boolean
  slots?: string[]
  isPage?: boolean
  loading?: boolean
  pageInfo?: {
    total: number
    pageSize: number
    currentPage: number
  }
}

export interface GridTableEmits {
  (event: 'pageChange', page: VxePagerProps): void
  (event: 'sortChange', sortList: any): void
  (event: 'radioChange', row: any): void
  (event: 'checkboxChange', row: any): void
}
