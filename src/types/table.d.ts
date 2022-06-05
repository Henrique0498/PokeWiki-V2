import { OptionType } from './forms'

export type TableType = {
  page: string
  totalItems: number
  itemsPerPage: number
  pageCurrent: number
  loading?: boolean

  head: TableHeadType

  table: TableBodyType

  footer: TableFooterType
}

export type TableFooterType = {
  options?: (id: number) => void
  buttons?: {
    nextAndBack?: (id: number) => void
  }
  children?: React.ReactNode
}

export type TableHeadType = {
  title: {
    value: string
  }
  buttons?: {
    itemsPerPage?: {
      setItemsPerPage: (id: number) => void
      setPage: (id: number) => void
    }
  }
  search?: boolean
}

export type TableBodyType = {
  head: ThType[]
  body: TdType[][]
}

export type ThType = {
  value: string
  className?: string
}

export type TdType = {
  type: string
  link?: string
  value?: string | React.ReactNode
  className?: string
  effect?: 'hexagon'
  image?: ImageProps
}

export type TableHeadType = {
  message: {
    current: number
    total: number
  }
  options?: OptionType[]
  buttons?: ButtonProps[]
  children?: React.ReactNode
}
