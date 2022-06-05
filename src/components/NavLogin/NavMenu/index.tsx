import Link from 'next/link'

import { IconLogin, IconLogout, IconUserAdd } from 'components/Icons'
import ButtonTheme from 'components/ButtonTheme'
import ImageCustom from 'components/Forms/ImageCustom'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'

import * as S from './styles'

interface NavMenuProps {
  isDisabled?: boolean
  handleSetLogout: () => void
}

const NavMenu = ({ isDisabled, handleSetLogout }: NavMenuProps) => {
  const { theme } = useAppData()
  const { user } = useAuth()

  function renderUserProfile() {
    if (user?.isLogged) {
      return (
        <S.User>
          <div className="p-1 flex items-center">
            <div
              className={`border-animation w-10 h-10
                flex justify-center items-center rounded
                bg-gray-50 relative dark:bg-black
              `}
            >
              <ImageCustom
                alt={`foto do usuário ${user?.name}`}
                src={user?.imageProfile}
                layout="fill"
                className="w-9 h-9 rounded overflow-hidden bg-gray-50 dark:bg-gray-900"
                objectFit="cover"
                unoptimized={true}
              />
            </div>
            <div className="pl-1">
              <h6>{user.name}</h6>
            </div>
          </div>
          <hr className="dark:border-gray-700 my-1" />
        </S.User>
      )
    }

    return null
  }

  function renderLogin() {
    if (user?.isLogged) {
      return (
        <button
          className={`login rounded-b logout`}
          type="button"
          onClick={handleSetLogout}
        >
          Sair
          <IconLogout />
        </button>
      )
    }

    return (
      <>
        <Link href="/login/signUp">
          <a className={`login signUp`}>
            Cadastre-se
            <IconUserAdd />
          </a>
        </Link>

        <Link href="/login/signIn">
          <a className={`login rounded-b signIn`}>
            Entrar
            <IconLogin />
          </a>
        </Link>
      </>
    )
  }

  return (
    <S.Container
      className={`${isDisabled ? '' : 'hidden'} w-44 absolute
        right-0 top-12 flex rounded rounded-t-sm shadow-lg
        bg-gray-50 dark:bg-gray-900 text-black dark:text-gray-200
      `}
    >
      {renderUserProfile()}

      <ButtonTheme className="w-full" />

      <hr className="dark:border-gray-700 my-1" />

      <S.Login className={`text-gray-50 ${theme}`}>{renderLogin()}</S.Login>
    </S.Container>
  )
}

export default NavMenu
