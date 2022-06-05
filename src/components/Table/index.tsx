import useAppData from 'hooks/useAppData'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import { TableType } from 'types/table'

import * as S from './styles'

const Table = (data: TableType) => {
  const { theme } = useAppData()

  return (
    <S.Container className={`${theme} w-full`}>
      <div className="flex flex-col min-w-0 break-words text-gray-900 dark:text-gray-200 w-full rounded">
        <TableHead
          {...data.head}
          itemsPerPage={data.itemsPerPage}
          totalItems={data.totalItems}
          pageCurrent={data.pageCurrent}
        />

        <TableBody
          {...data.table}
          page={data.page}
          itemsPerPage={data.itemsPerPage}
          loading={data.loading}
        />

        <TableFooter
          page={data.page}
          itemsPerPage={data.itemsPerPage}
          totalItems={data.totalItems}
          pageCurrent={data.pageCurrent}
          {...data.footer}
        />
      </div>
    </S.Container>
  )
}

export default Table
