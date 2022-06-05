import Button from 'components/Forms/Button'
import { IconCollection } from 'components/Icons'
import useAppData from 'hooks/useAppData'
import { useState, useEffect } from 'react'

import * as S from './styles'

interface OptionsProps {
  page: string
  totalItems: number
  itemsPerPage: number
  pageCurrent: number
  setPage: (id: number) => void
}

const Options = (data: OptionsProps) => {
  const { theme } = useAppData()
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [options, setOptions] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const fOptions: React.ReactNode[] = []
    const total = Math.ceil(data.totalItems / data.itemsPerPage)

    for (let i = 1; i <= total; i++) {
      fOptions.push(
        <div
          key={`tableOption${data.page + i}`}
          className={`py-2 rounded-l px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200`}
          onClick={() => {
            data.setPage(i)
            setShowOptions(false)
          }}
        >
          Página {i}
        </div>
      )
    }

    setOptions(fOptions)
  }, [data])

  return (
    <S.Container
      className={`${theme} relative py-2 z-20`}
      onMouseLeave={() => setShowOptions(false)}
      onMouseEnter={() => setShowOptions(true)}
    >
      <S.ListContainer
        className={`w-48 h-48 overflow-y-auto rounded dark:text-gray-200
          ${theme} ${showOptions ? 'show' : 'none'} list`}
      >
        {options?.map((option) => option)}
      </S.ListContainer>

      <Button
        key={`tableListButtonHead${data.page}`}
        className={`flex px-6 py-1 items-center`}
        size="custom"
        type="button"
        onClick={() => setShowOptions(true)}
      >
        <IconCollection className="mr-2" /> selecionar página
      </Button>
    </S.Container>
  )
}

export default Options
