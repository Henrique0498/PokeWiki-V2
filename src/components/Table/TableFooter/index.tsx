import Button from 'components/Forms/Button'
import { IconArrowLeft, IconArrowRight } from 'components/Icons'
import { TableFooterType } from 'types/table'
import Options from '../FormsTable/Options'

interface TableFooterProps extends TableFooterType {
  page: string
  totalItems: number
  itemsPerPage: number
  pageCurrent: number
}

import * as S from './styles'

const TableFooter = (data: TableFooterProps) => {
  const totalPage = Math.ceil(data.totalItems / data.itemsPerPage)

  function handleNavigationPages(value: string) {
    if (data?.buttons && data.buttons.nextAndBack) {
      if (value === 'back') {
        data.pageCurrent > 1 && data.buttons.nextAndBack(data.pageCurrent - 1)
      } else {
        totalPage > data.pageCurrent &&
          data.buttons.nextAndBack(data.pageCurrent + 1)
      }
    }
  }

  return (
    <S.Container className="bg-gray-100 text-gray-600 dark:text-gray-400 dark:bg-gray-900">
      <S.Details className="text-center sm:text-left">
        <h2 className="font-semibold text-sm ">
          Mostrando página
          <span className="text-gray-800 dark:text-gray-200">
            {' ' + data.pageCurrent + ' '}
          </span>
          de
          <span className="text-gray-800 dark:text-gray-200">
            {' ' + totalPage + ' '}
          </span>
          paginas.
        </h2>
      </S.Details>

      <S.Pagination className="text-right">
        {data.options && (
          <Options
            page={data.page}
            totalItems={data.totalItems}
            itemsPerPage={data.itemsPerPage}
            pageCurrent={data.pageCurrent}
            setPage={data.options}
          />
        )}

        {data.buttons?.nextAndBack && (
          <S.Details className="flex">
            <Button
              onClick={() => handleNavigationPages('back')}
              className={`flex items-center rounded-r-none`}
              isDisabled={data.pageCurrent === 1}
              size="sm"
              textTransform="uppercase"
            >
              <IconArrowLeft className="mr-1" /> voltar
            </Button>
            <Button
              onClick={() => handleNavigationPages('next')}
              className="flex items-center rounded-l-none"
              size="sm"
              textTransform="uppercase"
              isDisabled={data.pageCurrent === totalPage}
            >
              próximo
              <IconArrowRight className="ml-1" />
            </Button>
          </S.Details>
        )}

        {data.children}
      </S.Pagination>
    </S.Container>
  )
}

export default TableFooter
