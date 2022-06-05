import NotFound from 'components/NotFound'
import Search from 'components/Search'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'
import { useEffect } from 'react'
import * as S from './../styles/404.styles'

const Custom404 = () => {
  const { theme } = useAppData()
  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return (
    <S.Container className={`${theme}`}>
      <Search />

      <NotFound />
    </S.Container>
  )
}

export default Custom404
