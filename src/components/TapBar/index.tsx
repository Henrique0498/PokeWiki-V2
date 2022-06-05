import { useRouter } from 'next/router'

import {
  IconBeaker,
  IconBeakerSolid,
  IconFire,
  IconFireSolid,
  IconFruit,
  IconFruitSolid,
  IconHome,
  IconHomeSolid,
  IconInfo,
  IconInfoSolid
} from 'components/Icons'
import Li from './Li'
import TapBarBackground from './Background'
import TapBarIndicator from './Indicator'
import useAppData from 'hooks/useAppData'

import * as S from './styles'

const TapBar = () => {
  const { theme } = useAppData()
  const router = useRouter()
  const list = [
    {
      href: '/home',
      icon: IconHome,
      iconSolid: IconHomeSolid,
      text: 'Inicio'
    },
    {
      href: '/berry',
      icon: IconFruit,
      iconSolid: IconFruitSolid,
      text: 'Berry'
    },
    {
      href: '/item',
      icon: IconBeaker,
      iconSolid: IconBeakerSolid,
      text: 'Item'
    },
    {
      href: '/move',
      icon: IconFire,
      iconSolid: IconFireSolid,
      text: 'TH/TM'
    },
    { href: '/about', icon: IconInfo, iconSolid: IconInfoSolid, text: 'Sobre' }
  ]
  const index = list.findIndex((el) => el.href === router.asPath)
  const active = index + 1 ? true : false

  function renderList() {
    return list.map((fList) => (
      <Li href={fList.href} key={`liTapBar${fList.href}`} items={list.length}>
        <span className="icon">
          {<fList.icon color="transparent" />}
          {<fList.iconSolid />}
        </span>
        <span className="text">{fList.text}</span>
      </Li>
    ))
  }

  return (
    <S.Container className={`${theme}`}>
      <S.Navigation
        className={`text-gray-800 dark:text-gray-200`}
        items={list.length}
      >
        {renderList()}

        <TapBarIndicator
          theme={theme}
          items={list.length}
          active={active}
          itemActive={index}
        />

        <TapBarBackground
          theme={theme}
          items={list.length}
          active={active}
          itemActive={index}
        />
      </S.Navigation>
    </S.Container>
  )
}

export default TapBar
