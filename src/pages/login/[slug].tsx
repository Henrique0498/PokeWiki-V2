import { useRouter } from 'next/router'

import * as S from 'styles/login.styles'

import SingUp from 'templates/SignUp'
import useAppData from 'hooks/useAppData'
import SignIn from 'templates/SignIn'
import { useEffect, useState } from 'react'
import useAuth from 'hooks/useAuth'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  const { setLoading } = useAuth()
  const { theme } = useAppData()
  const [pageLoad, setPageLoad] = useState<number>(0)

  useEffect(() => {
    if (slug) {
      setPageLoad((load) => load + 1)
    }
  }, [slug])

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  function renderLogin() {
    if (slug === 'signIn') {
      return (
        <S.Forms key="signIn" className={`${theme} signIn`}>
          <SignIn className={`on ${pageLoad > 1 ? 'active' : ''}`} />
          <SingUp className={`off ${pageLoad > 1 ? 'disable' : ''}`} />
        </S.Forms>
      )
    } else if (slug === 'signUp') {
      return (
        <S.Forms key="signUp" className={`${theme} singUp`}>
          <SignIn className={`off ${pageLoad > 1 ? 'disable' : ''}`} />
          <SingUp className={`on ${pageLoad > 1 ? 'active' : ''}`} />
        </S.Forms>
      )
    }

    return null
  }

  return <S.Container>{renderLogin()}</S.Container>
}

export default Slug
