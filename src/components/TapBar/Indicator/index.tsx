import { ThemeType } from 'types/system'

import * as S from './styles'

interface TapBarIndicatorProps {
  theme: ThemeType
  active: boolean
  items: number
  itemActive: number
}

const TapBarIndicator = ({
  theme,
  active = false,
  ...props
}: TapBarIndicatorProps) => {
  if (active) {
    return (
      <S.Container
        className={`${theme} ${active ? '' : 'desative'}`}
        {...props}
      />
    )
  }

  return null
}

export default TapBarIndicator
