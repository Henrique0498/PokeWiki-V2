import Loading from 'components/Loading'
import useAppData from 'hooks/useAppData'
import * as S from './styles'

const LoadingContainer = () => {
  const { theme } = useAppData()

  return (
    <S.Container
      className={`${theme} relative flex items-center justify-center
        bg-gray-50 dark:bg-gray-800 rounded
      `}
    >
      <Loading />
    </S.Container>
  )
}

export default LoadingContainer
