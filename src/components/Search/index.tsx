import { useState } from 'react'
import { useRouter } from 'next/router'

import { IconSearch, IconX } from 'components/Icons'
import Button from 'components/Forms/Button'
import Input from 'components/Forms/Input'
import ListSearch from './ListSearch'
import useForm from 'hooks/useForm'

import * as S from './styles'

interface SearchProps {
  className?: string
}

const Search = ({ className }: SearchProps) => {
  const router = useRouter()
  const searchFromPage = useForm('search')
  const [visibleList, setVisibleList] = useState(false)

  const handleSearch = () => {
    if (searchFromPage.value.length > 1) {
      router.push(`/search?search=${searchFromPage.value}`)
    }
  }

  return (
    <S.Container
      className={`h-40 w-full flex justify-center items-center relative ${className}`}
    >
      <S.InputContainer className="w-80 max-w-full mx-2 relative">
        {searchFromPage.value.length > 1 && (
          <Button
            size="custom"
            color="transparent"
            className="w-8 h-10 flex justify-center items-center text-red-500 hover:text-red-500 absolute right-10 top-0 z-10"
            onClick={() => searchFromPage.setValue('')}
          >
            <IconX size={5} />
          </Button>
        )}

        <Input
          placeholder="Pesquisar"
          id="searchFromPage"
          icon={<IconSearch className="text-blue-50 dark:text-gray-700" />}
          {...searchFromPage}
          onFocus={() => setVisibleList(true)}
          onClick={handleSearch}
          className="shadow input"
        />

        <ListSearch filter={searchFromPage.value} visibleList={visibleList} />
      </S.InputContainer>
    </S.Container>
  )
}

export default Search
