import Link from 'next/link'

import {
  IconBerry,
  IconMove,
  IconPokemonPikachuSmall,
  IconPotion
} from 'components/Icons'
import { ListItemData, RoutersPagePokeApiType } from 'types/routesApi'
import useText from 'hooks/useText'

import * as S from './styles'

interface ItemListSearchProps {
  data: DataProps
}

type DataProps = {
  pokemon: ListItemData | []
  item: ListItemData | []
  berry: ListItemData | []
  move: ListItemData | []
}

const ItemListSearch = ({ data }: ItemListSearchProps) => {
  const { textTransform } = useText()
  const icon = {
    pokemon: <IconPokemonPikachuSmall />,
    berry: <IconBerry />,
    item: <IconPotion color="sky" />,
    move: <IconMove />
  }

  function renderList(list: ListItemData, page: RoutersPagePokeApiType) {
    return list.map(({ name, url }) => (
      <S.Container key={`${name}-${url}`}>
        <Link href={`/${page}/${name}`}>
          <a className={`w-full h-10 flex items-center px-2 capitalize`}>
            <div className="mr-2">{icon[page]}</div>
            <p className="dark:text-gray-200">
              {textTransform(name, 'replace')}
            </p>
          </a>
        </Link>
      </S.Container>
    ))
  }

  return (
    <>
      {renderList(data?.pokemon, 'pokemon')}
      {renderList(data?.berry, 'berry')}
      {renderList(data?.item, 'item')}
      {renderList(data?.move, 'move')}
    </>
  )
}

export default ItemListSearch
