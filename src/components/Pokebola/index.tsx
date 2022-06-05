import useAppData from 'hooks/useAppData'
import { ThemeType } from 'types/system'
import * as S from './styles'

interface PokebolaProps {
  size?: string
  className?: string
  themeProps?: ThemeType
  style?: object
  color?: {
    dark: {
      top: string
      middle: string
      button: string
    }
    light: {
      top: string
      middle: string
      button: string
    }
  }
}

const Pokebola = ({
  size = '176px',
  className,
  style,
  themeProps,
  ...props
}: PokebolaProps) => {
  const { theme } = useAppData()
  const color = props.color ?? {
    dark: {
      top: '#1a0000',
      middle: '#000',
      button: '#0d0d0d'
    },
    light: {
      top: 'rgba(250, 215, 218)',
      middle: 'rgb(255, 255, 255)',
      button: 'rgb(236, 238, 238)'
    }
  }

  return (
    <S.Container
      className={`
        flex items-center justify-center relative
        rounded-full ${themeProps ?? theme} ${className}
      `}
      style={{ ...style, height: size, width: `${size}` }}
      {...color}
    >
      <div className={`bar absolute bg-white`} style={{ width: size }} />
      <div className="button absolute bg-white rounded-full" />
    </S.Container>
  )
}

export default Pokebola
