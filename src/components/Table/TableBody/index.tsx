import Loading from 'components/Loading'

import { TableBodyType } from 'types/table'
import Td from './Td'
import Th from './Th'

import * as S from './styles'

interface TableBodyProps extends TableBodyType {
  page: string
  itemsPerPage: number
  loading?: boolean
}

const TableBody = (data: TableBodyProps) => {
  return (
    <S.Container className="overflow-x-auto">
      <div className="align-middle inline-block min-w-full">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-black">
            <thead className="bg-gray-100 dark:bg-gray-900">
              <tr>
                <Th head={data.head} page={data.page} />
              </tr>
            </thead>

            <tbody
              className={`divide-y divide-gray-200 dark:divide-gray-900`}
              style={{ height: `${data.itemsPerPage * 61}px` }}
            >
              {data.loading ? (
                <tr>
                  <td colSpan={data.head.length}>
                    <Loading />
                  </td>
                </tr>
              ) : (
                <Td body={data.body} page={data.page} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </S.Container>
  )
}

export default TableBody
