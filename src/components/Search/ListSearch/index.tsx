import { IconMove, IconPokemonMeowth, IconPotion } from 'components/Icons'
import useAppData from 'hooks/useAppData'
import useText from 'hooks/useText'
import { useEffect, useState } from 'react'
import apiPokeApi from 'services/api'
import { LIST_ALL_GET, LIST_GET } from 'services/routes'
import { ListItemData } from 'types/routesApi'
import ItemListSearch from './ItemListSearch'
import * as S from './styles'

interface ListSearchProps {
  visibleList: boolean
  filter: string
}

type DataProps = {
  pokemon: ListItemData | []
  item: ListItemData | []
  berry: ListItemData | []
  move: ListItemData | []
}

type RoutersProps = 'pokemon' | 'berry' | 'item' | 'move'

const ListSearch = ({ visibleList, filter }: ListSearchProps) => {
  const { data, setData, theme } = useAppData()
  const [pageLoading, setPageLoading] = useState(true)
  const [dataFilter, setDataFilter] = useState<DataProps | undefined>()
  const { textTransform } = useText()

  useEffect(() => {
    async function getCount(fRouter: string) {
      let error
      const { url } = LIST_GET(fRouter, 1, 0)

      const count = await apiPokeApi
        .get(url)
        .then((response) => {
          return response.data.count
        })
        .catch((response) => {
          error = response
        })

      return { count, error }
    }

    async function getProps(fRouter: string) {
      const fCount = await getCount(fRouter)
      const fUrl = LIST_ALL_GET(fRouter, fCount.count)
      const fData = await (await apiPokeApi.get(fUrl.url)).data.results

      return fData
    }

    async function setProps() {
      if (!data) {
        const pokemon = await getProps('pokemon')
        const berry = await getProps('berry')
        const item = await getProps('item')
        const move = await getProps('move')

        setData({ pokemon, berry, item, move })
      }
      setPageLoading(false)
    }

    if (visibleList && pageLoading) {
      setProps()
    }
  }, [visibleList, pageLoading, data, setData])

  useEffect(() => {
    function filterData(value: RoutersProps) {
      return data?.[value].filter((element) =>
        element.name.includes(textTransform(filter.toLowerCase(), 'replace'))
      )
    }

    function setFilter() {
      const pokemon = filterData('pokemon') ?? []
      const berry = filterData('berry') ?? []
      const item = filterData('item') ?? []
      const move = filterData('move') ?? []

      setDataFilter({ pokemon, berry, item, move })
    }

    if (filter.length > 1 && visibleList) {
      setFilter()
    } else if (filter.length < 2 && visibleList) {
      setDataFilter({ pokemon: [], berry: [], item: [], move: [] })
    }
  }, [data, filter, visibleList, textTransform])

  function controlList() {
    if (pageLoading) {
      return (
        <S.Loading className="flex items-center justify-between py-2 px-4 font-medium">
          Carregando...
          <S.Icons className="text-white dark:text-gray-800">
            <div className="flex justify-between">
              <IconPokemonMeowth size={10} />
              <IconPotion size={10} color="violet" />
              <IconMove size={10} />
            </div>
          </S.Icons>
        </S.Loading>
      )
    }

    if (filter.length > 1 && dataFilter?.pokemon.length === 0) {
      return (
        <div className="w-full h-10 flex items-center px-2">
          Nenhum resultado.
        </div>
      )
    }

    if (filter.length > 1 && dataFilter) {
      return <ItemListSearch data={dataFilter} />
    }

    return null
  }

  if (visibleList && filter !== '') {
    return (
      <S.Container
        className={`w-full max-h-64 absolute top-9 pt-1 overflow-y-auto
          shadow-md rounded-b dark:text-gray-200 bg-gray-50 dark:bg-gray-800
          divide-y divide-gray-200 dark:divide-gray-900 ${theme}
        `}
      >
        {controlList()}
      </S.Container>
    )
  }

  return null
}

export default ListSearch
