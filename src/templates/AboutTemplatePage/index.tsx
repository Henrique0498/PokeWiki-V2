import { useEffect } from 'react'

import Search from 'components/Search'
import TitleSite from 'components/TitleSite'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'

import * as S from './styles'

const AboutTemplatePage = () => {
  const { theme } = useAppData()
  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return (
    <S.Page style={{ zIndex: 2 }} className={`${theme}`}>
      <Search />
      <S.Container className={`${theme}`}>
        <TitleSite size="text-4xl" />
      </S.Container>
    </S.Page>
  )
}

export default AboutTemplatePage
