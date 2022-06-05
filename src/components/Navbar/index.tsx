import { useEffect, useRef, useState } from 'react'

import { useMedia } from 'hooks/useMedia'
import ButtonLogin from '../NavLogin'
import NavLink from 'components/NavLink'
import TitleSite from 'components/TitleSite'
import useAppData from 'hooks/useAppData'

import * as S from './styles'

const Navbar = () => {
  const ref = useRef<HTMLInputElement>(null)
  const { theme } = useAppData()
  const { match } = useMedia('(min-width: 768px)')
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(true)

  useEffect(() => {
    let lastScrollTop = 3000

    function handleWatchScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }

      setShowMenu(false)
      lastScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleWatchScroll)

    return () => {
      window.removeEventListener('scroll', handleWatchScroll)
    }
  }, [])

  return (
    <S.Container
      ref={ref}
      className={`bg-red-500 text-gray-50 shadow-xl
        w-full h-16 fixed top-0 p-4 flex items-center transition-all
        ${theme} ${showNav ? 'active' : ''}
      `}
    >
      <TitleSite href="/home" />

      <ButtonLogin showMenu={showMenu} setShowMenu={setShowMenu} />
    </S.Container>
  )
}

export default Navbar
