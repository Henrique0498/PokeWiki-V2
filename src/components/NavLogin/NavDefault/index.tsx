import ButtonTheme from 'components/ButtonTheme'
import Button from 'components/Forms/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const NavDefault = () => {
  const router = useRouter()

  return (
    <S.Container className={`flex items-center`}>
      <S.SignUp>
        <Link href="/login/signUp">
          <a className="">Cadastre-se</a>
        </Link>
      </S.SignUp>

      <span className="h-12 border-r-2 border-gray-200 mx-4" />

      <S.SignIn className="">
        <Button
          size="md"
          className="font-medium"
          color="purple"
          onClick={() => router.push('/login/signIn')}
        >
          Entrar
        </Button>
      </S.SignIn>

      <ButtonTheme size="small" className="ml-4 rounded-sm" />
    </S.Container>
  )
}

export default NavDefault
