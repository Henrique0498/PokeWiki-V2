import ImageCustom from 'components/Forms/ImageCustom'
import { IconFire, IconIdentification, IconSparkles } from 'components/Icons'
import Pages, { PagesProps } from 'components/Pages'
import Search from 'components/Search'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import api from 'services/api'
import { GET_DETAILS_ITEM } from 'services/routes'

import * as S from './styles'

interface ShowDetailsPageProps {
  data: any
}

const ShowDetailsPage = () => {
  const { theme } = useAppData()

  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  const dataPage: PagesProps = {
    head: [
      {
        id: 'detalhes',
        icon: <IconIdentification />,
        text: 'Detalhes'
      },
      {
        id: 'evolução',
        icon: <IconSparkles />,
        text: 'Evolução'
      },
      {
        id: 'movimentos',
        icon: <IconFire />,
        text: 'Movimentos'
      }
    ],
    body: [
      { id: 'detalhes', content: 'Detalhes' },
      { id: 'movimentos', content: 'movimentos' }
    ]
  }

  return (
    <S.Page
      className={`${theme} relative flex items-center flex-col pt-16 pb-14`}
    >
      <Search className="mb-10" />
      <S.Container className={`${theme} dark:text-gray-200`}>
        <S.Head className="flex justify-center items-center">
          <S.Image className="p-1 relative rounded-full w-40 h-40">
            <ImageCustom
              alt="teste"
              className="bg-white rounded-full w-full h-full"
              layout="fill"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
            />
          </S.Image>
          <S.Name className="text-3xl font-bold py-2">Charizard</S.Name>
        </S.Head>

        <S.Body className="h-40">
          <Pages {...dataPage} />
        </S.Body>
      </S.Container>
    </S.Page>
  )
}

export default ShowDetailsPage
