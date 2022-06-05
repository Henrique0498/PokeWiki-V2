import { useState, useEffect, useCallback } from 'react'

import { LIST_GET } from 'services/routes'
import { TableType, TdType } from 'types/table'
import { ItemList, FetchList } from 'types/routesApi'
import { IconPunch } from 'components/Icons'
import LoadingContainer from 'components/Loading/Container'
import NotFound from 'components/NotFound'
import Search from 'components/Search'
import Table from 'components/Table'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'
import useFetch from 'hooks/useFetch'
import useText from 'hooks/useText'

import * as S from './styles'

interface ShowListProps {
  router: string
  title: string
}

const PageTemplate = ({ router, title }: ShowListProps) => {
  const { theme } = useAppData()
  const { setLoading } = useAuth()
  const { textTransform } = useText()
  const [page, setPage] = useState<number>(1)
  const [dataBase, setDataBase] = useState<TableType>()
  const [itemsPerPage, setItemsPerPage] = useState<number>(8)

  const getProps = LIST_GET(router, itemsPerPage, (page - 1) * itemsPerPage)
  const { data, error, isLoading } = useFetch<FetchList>(getProps)

  const getSourceFromImage = useCallback(
    (name: string, router: string, url: string) => {
      const fUrl =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/'
      let result = null

      if (router === 'pokemon') {
        const textArray = url.split('/')

        result = fUrl + `${router}/${textArray[textArray.length - 2]}.png`
      } else if (router === 'berry') {
        result = fUrl + `items/${name}-berry.png`
      } else if (router === 'item') {
        result = fUrl + `items/${name}.png`
      }

      return result
    },
    []
  )

  const getImageOrIcon = useCallback(
    (item: ItemList): TdType => {
      const fUrl = getSourceFromImage(item.name, router, item.url)

      if (fUrl) {
        return {
          type: 'image',
          link: `/${router}/${item.name}`,
          className: 'flex justify-center',
          effect: 'hexagon',
          image: {
            src: fUrl,
            alt: `imagem do(a) ${router} ${textTransform(item.name, 'replace')}`
          }
        }
      }

      return {
        type: 'component',
        effect: 'hexagon',
        link: `/${router}/${item.name}`,
        className: 'flex justify-center',
        value: <IconPunch size={5} className="text-gray-200" />
      }
    },
    [router, textTransform, getSourceFromImage]
  )

  useEffect(() => {
    if (data) {
      const fData: TableType = {
        page: router,
        totalItems: data.count,
        itemsPerPage: itemsPerPage,
        pageCurrent: page,
        loading: isLoading,
        head: {
          title: {
            value: `Página de ${title ?? 'Coisas Aleatórias'}`
          },
          buttons: {
            itemsPerPage: {
              setItemsPerPage: (id: number) => setItemsPerPage(id),
              setPage: (id: number) => setPage(id)
            }
          }
        },
        table: {
          head: [
            { value: '#', className: 'w-20 text-center' },
            { value: 'Nome' }
          ],
          body: data
            ? data?.results.map((item) => [
                getImageOrIcon(item),
                {
                  type: 'string',
                  link: `/${router}/${item.name}`,
                  value: textTransform(item.name, 'replace')
                }
              ])
            : []
        },
        footer: {
          options: (id: number) => setPage(id),
          buttons: {
            nextAndBack: (id: number) => setPage(id)
          }
        }
      }

      setDataBase(fData)
    }
    setLoading(false)
  }, [
    data,
    getImageOrIcon,
    isLoading,
    itemsPerPage,
    page,
    router,
    setLoading,
    textTransform,
    title
  ])

  function controlRender() {
    if (error) {
      return <NotFound />
    }

    if (dataBase) {
      return (
        <S.Container className={`${theme}`}>
          <Table {...dataBase} />
        </S.Container>
      )
    }

    return <LoadingContainer />
  }

  return (
    <S.Page className={`${theme}`}>
      <Search />

      {controlRender()}
    </S.Page>
  )
}

export default PageTemplate
