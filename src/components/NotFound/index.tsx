import { useEffect } from 'react'

import { IconPikachu } from 'components/Icons'
import useAppData from 'hooks/useAppData'
import useAuth from 'hooks/useAuth'

import * as S from './styles'

interface NotFoundProps {
  message?: string
}

const NotFound = ({
  message = 'Não conseguimos encontrar esta página!'
}: NotFoundProps) => {
  const { theme } = useAppData()
  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return (
    <S.Container className={`${theme}`}>
      <S.Error className="">
        <span>4</span>
        <S.Icon className="mx-auto">
          <S.Pikachu className="absolute">
            <IconPikachu size="custom" />
          </S.Pikachu>
          <S.Pokebola className="">
            <div className="line" />
            <div className="circle" />
          </S.Pokebola>
        </S.Icon>
        <span>4</span>
      </S.Error>
      <S.Message className="dark:text-gray-300 mt-3">
        <span className="text-blue-500 font-medium text-3xl md:text-5xl">
          Oops!
        </span>
        <p>{message}</p>
      </S.Message>
    </S.Container>
  )
}

export default NotFound
