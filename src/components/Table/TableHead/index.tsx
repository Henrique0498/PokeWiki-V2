import { TableHeadType } from 'types/table'
import { IconSearch, IconViewList } from 'components/Icons'
import Input from 'components/Forms/Input'
import Button from 'components/Forms/Button'

import * as S from './styles'
import useForm from 'hooks/useForm'

interface TableHeadProps extends TableHeadType {
  itemsPerPage: number
  totalItems: number
  pageCurrent: number
}

const TableHead = (data: TableHeadProps) => {
  const headOptions = data.search && data.buttons
  const searchFromPage = useForm('search')

  function renderSearch() {
    return (
      <div className={`h-10 flex items-center justify-end my-4`}>
        <Input
          id="searchTable"
          placeholder="Pesquisar na tabela"
          {...searchFromPage}
          type="search"
          icon={<IconSearch className={`text-gray-50 dark:text-gray-700`} />}
        />
      </div>
    )
  }

  function handleChangeItemsPerPage() {
    if (data.buttons && data.buttons?.itemsPerPage) {
      const result = data.itemsPerPage === 20 ? 8 : data.itemsPerPage + 4
      const totalPage = Math.ceil(data.totalItems / result)

      if (data.pageCurrent > totalPage) {
        data.buttons.itemsPerPage.setPage(totalPage)
        console.log('entrou')
      }

      data.buttons.itemsPerPage.setItemsPerPage(result)
    }
  }

  return (
    <S.Container>
      <h3
        className={`font-semibold text-base flex-1 text-center sm:text-left
          ${headOptions ? 'text-3xl my-2' : ''}
        `}
      >
        {data.title.value}
      </h3>

      <div className="flex-grow flex-1 text-right">
        {data.search && renderSearch()}

        {data.buttons && data.buttons?.itemsPerPage && (
          <Button
            className="mr-1 my-1"
            size="sm"
            textTransform="lowercase"
            onClick={handleChangeItemsPerPage}
          >
            <IconViewList className="inline mr-1" />
            {data.itemsPerPage}x
          </Button>
        )}
      </div>
    </S.Container>
  )
}

export default TableHead
