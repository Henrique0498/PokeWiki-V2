import { ThemeType } from 'types/system'

import * as S from './styles'

interface TapBarBackgroundProps {
  theme: ThemeType
  active: boolean
  items: number
  itemActive: number
}

const TapBarBackground = ({
  active = false,
  theme,
  ...props
}: TapBarBackgroundProps) => {
  return (
    <S.Container className={`${theme} ${active ? '' : 'desative'}`} {...props}>
      <div className={`background`}>
        <div className="icon">
          <svg
            viewBox="0 0 100 150"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.0436047C8.21918 -0.635546 12.052 6.7215 17.006 14.9335C20.6186 22.8755 30.4475 36.2777 48.9691 36.2777C68.4507 36.2777 77.835 23.8683 81.7822 14.9335C86.6661 7.09494 90.8412 0.0433894 100 0.0436047V150H0V0.0436047Z" />
          </svg>
        </div>
      </div>
    </S.Container>
  )
}

export default TapBarBackground
