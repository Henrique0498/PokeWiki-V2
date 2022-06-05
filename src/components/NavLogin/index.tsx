import { Dispatch, SetStateAction, useEffect } from 'react'

import { useMedia } from 'hooks/useMedia'
import Button from 'components/Forms/Button'
import NavMenu from './NavMenu'
import NavDefault from './NavDefault'
import NavProfile from './NavProfile'
import useAuth from 'hooks/useAuth'

import * as S from './styles'
import { useRouter } from 'next/router'

interface ButtonLoginProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>
  showMenu: boolean
}

const NavLogin = ({ showMenu, setShowMenu }: ButtonLoginProps) => {
  const { user, setLogout } = useAuth()
  const router = useRouter()
  const { match } = useMedia('(max-width: 1023px)')

  function handleShowMenu() {
    if (match) {
      setShowMenu((menu) => !menu)
    }
  }

  function handleSetLogout() {
    setShowMenu(false)
    setLogout()
  }

  useEffect(() => {
    setShowMenu(false)
  }, [router.asPath, setShowMenu])

  useEffect(() => {
    if (!match) {
      setShowMenu(false)
    }
  }, [match, setShowMenu])

  function setMenu(set: boolean) {
    if (match) {
      setShowMenu(set)
    }
  }

  return (
    <S.Container
      className={`flex items-center relative h-14`}
      onMouseLeave={() => setMenu(false)}
      onMouseEnter={() => setMenu(true)}
    >
      {user?.isLogged ? (
        <NavProfile onClick={handleShowMenu} />
      ) : (
        <NavDefault />
      )}

      <S.MenuBar className={`${user?.isLogged ? 'logged' : 'notLogged'}`}>
        <Button
          size="custom"
          color="transparent"
          className={`flex justify-center items-center w-10 h-10`}
          onClick={() => setShowMenu((menu) => !menu)}
        >
          <span className={`iconMenu flex h-full ${showMenu ? 'active' : ''}`}>
            <span />
          </span>
        </Button>
      </S.MenuBar>

      <NavMenu isDisabled={showMenu} handleSetLogout={handleSetLogout} />
    </S.Container>
  )
}

export default NavLogin
