import useAppData from 'hooks/useAppData'

import { ThemeType } from 'types/system'

import * as S from './styles'

export interface LoadingProps {
  text?: string
  themeProps?: ThemeType
}

const Loading = ({ text = 'Carregando...', themeProps }: LoadingProps) => {
  const { theme } = useAppData()

  return (
    <S.Container
      className={`flex justify-center items-center flex-col`}
      themeProps={themeProps ?? theme}
    >
      <div
        className={`spinner relative flex justify-center items-center w-40 h-40  sm:w-80 sm:h-80`}
      >
        <div className={`fragment lg`} />
        <div className={`fragment md`} />
        <div className={`fragment sm`} />
        <div className={`fragment notGrow`} />

        <div className={`fragmentMiddle rounded-full`} />

        <div className={`strip`} />

        <div className={`middle rounded-full`} />
      </div>
      <h2 className="text-xl font-medium text-black dark:text-gray-200">
        {text}
      </h2>
    </S.Container>
  )
}

export default Loading
