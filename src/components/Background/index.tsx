import { useEffect, useState } from 'react'

import Pokebola from 'components/Pokebola'
import randomNumber from '../../functions/randomNumber'
import useAppData from 'hooks/useAppData'
import { useMedia } from 'hooks/useMedia'

import * as S from './styles'
import { ThemeType } from 'types/system'

export interface BackgroundProps {
  themeProps?: ThemeType
}

const Background = ({ themeProps }: BackgroundProps) => {
  const { windowWidth, windowHeight } = useMedia()
  const { theme } = useAppData()
  const [pokebolas, setPokebolas] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (windowWidth && windowHeight) {
      const fPokebolas = []
      const windowSize = (windowWidth * windowHeight) / 25600

      for (let i = 1; i <= windowSize; i++) {
        fPokebolas.push(
          <Pokebola
            key={`pokebolaId${i}`}
            themeProps={themeProps}
            className={`mx-${randomNumber(12, 4)} my-${randomNumber(12, 4)}`}
            style={{
              transform: `rotate(${randomNumber(70, -70)}deg)`
            }}
          />
        )
      }

      setPokebolas(fPokebolas)
    }
  }, [windowWidth, windowHeight, themeProps])

  return (
    <S.Container className={`${themeProps ?? theme} absolute overflow-hidden`}>
      <div className={`flex flex-wrap bg-white justify-between items-center`}>
        {pokebolas.map((pokebola) => pokebola)}
      </div>
    </S.Container>
  )
}

export default Background
