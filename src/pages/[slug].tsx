import Head from 'next/head'
import { useRouter } from 'next/router'

import PageTemplate from 'templates/PageTemplate'
import Custom404 from './404'

type routersType = {
  [key: string]: string
}

type titlesType = {
  [key: string]: string
}

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  const routers: routersType = {
    home: 'pokemon',
    berry: 'berry',
    item: 'item',
    move: 'move'
  }
  const title: titlesType = {
    home: 'Pokémons',
    berry: 'Berrys',
    item: 'Itens',
    move: 'Movimentos'
  }

  if (typeof slug !== 'string' && slug !== undefined) {
    return <Custom404 />
  }

  if (slug) {
    return (
      <>
        <Head>
          <title>PokeWiki - {title[slug] ?? 'Pagina não encontrada'}</title>
        </Head>
        <PageTemplate router={routers[slug]} key={slug} title={title[slug]} />
      </>
    )
  }

  return null
}

export default Slug
