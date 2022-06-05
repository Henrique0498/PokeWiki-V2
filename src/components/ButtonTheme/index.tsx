import { IconPokebola } from 'components/Icons'
import useAppData from 'hooks/useAppData'
import Switch from 'react-switch'
import theme from 'styles/theme'

import * as S from './styles'

interface ButtonThemeProps {
  size?: 'small'
  className?: string
}

const ButtonTheme = ({ size, className }: ButtonThemeProps) => {
  const appData = useAppData()

  function getStyle() {
    let result = ''

    switch (size) {
      case 'small':
        result = 'p-1'
        break
      default:
        result = 'flex justify-between items-center px-2 py-1'
    }

    return result
  }

  function getIcon() {
    return (
      <div className="w-5 h-5 flex justify-center items-center">
        <IconPokebola size={6} className="absolute" />
      </div>
    )
  }

  return (
    <S.Container
      className={`${getStyle()} ${className}`}
      onClick={appData.changeTheme}
    >
      {size != 'small' && 'Tema'}

      <Switch
        onChange={appData.changeTheme}
        checked={appData.theme === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={10}
        handleDiameter={20}
        onColor={theme.colors.blue[600]}
        offColor={theme.colors.blue[500]}
        checkedHandleIcon={getIcon()}
        uncheckedHandleIcon={getIcon()}
      />
    </S.Container>
  )
}

export default ButtonTheme
