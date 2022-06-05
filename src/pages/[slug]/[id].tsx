import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import NotFound from 'pages/404'
import api from 'services/api'
import { GET_DETAILS_ITEM } from 'services/routes'
import ShowDetailsPage from 'templates/ShowDetailsPage'
import { FetchPokemonType } from 'types/routesApi'

interface PageDetailsProps {
  data: FetchPokemonType
}

const PageDetails = ({ data }: PageDetailsProps) => {
  const router = useRouter()
  const { slug, id } = router.query

  if (typeof id !== 'string' || typeof slug !== 'string') {
    return <NotFound />
  }

  return <ShowDetailsPage />
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'pokemon', id: '1' } },
    { params: { slug: 'item', id: '1' } },
    { params: { slug: 'move', id: '1' } }
  ]

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { url, configAxios } = GET_DETAILS_ITEM(
    `${params?.slug}`,
    `${params?.id}`
  )

  try {
    const data = await (await api.get(url, configAxios)).data

    if (!data) {
      return { notFound: true }
    }

    return {
      props: {
        data: data
      }
    }
  } catch {
    return { notFound: true }
  }
}

export default PageDetails
