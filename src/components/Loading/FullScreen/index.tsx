import Loading from 'components/Loading'
import useAuth from 'hooks/useAuth'
import * as S from './styles'

const LoadingFullScreen = () => {
  const { loading } = useAuth()

  if (loading) {
    return (
      <S.Container
        className={`w-full fixed bg-white flex justify-center items-center`}
      >
        <Loading themeProps="light" />
      </S.Container>
    )
  }

  return null
}

export default LoadingFullScreen
