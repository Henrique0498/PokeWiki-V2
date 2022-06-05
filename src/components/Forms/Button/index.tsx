import { ButtonType } from 'types/forms'
import { ColorsType, TextTransformType } from 'types/tailwindcss'

import * as S from './styles'

export interface ButtonProps extends ButtonType {
  className?: string
  color?: ButtonColorsType
  outline?: boolean
  isDisabled?: boolean
  size: 'custom' | 'sm' | 'md' | 'lg'
  textTransform?: TextTransformType
  onClick?: () => void
}

export type ButtonColorsType = ColorsType | 'transparent'

const Button = (data: ButtonProps) => {
  const textTransform = data.textTransform ?? 'capitalize'
  const color = data.color ?? 'blue'
  const sizes = {
    custom: '',
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-9 text-lg'
  }

  function getColor() {
    let result = ''

    if (data.outline) {
      result = 'border-2 '

      switch (color) {
        case 'black':
          result += `border-black text-black hover:text-gray-100`
          break
        case 'white':
          result = `border-2 border-gray-100 dark:border-white text-gray-500
                    dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-600`
          break
        case 'transparent':
          result = ''
          break
        default:
          result += `border-${color}-500 text-${color}-500
                     hover:text-gray-50 dark:hover:text-gray-50`
      }
    } else {
      switch (color) {
        case 'black':
          result = `bg-black text-gray-200 hover:bg-gray-900 hover:text-white`
          break
        case 'white':
          result = `bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-700`
          break
        case 'transparent':
          result = ''
          break
        default:
          result = `text-gray-50 bg-${color}-500 hover:bg-${color}-600
                    dark:bg-${color}-600 dark:hover:bg-${color}-700`
      }
    }

    return result
  }

  function handleClick() {
    if (!data.isDisabled && data.onClick) {
      data.onClick()
    }
  }

  return (
    <S.Container
      className={`duration-150 ease-linear transition-all rounded-sm
        ${data.className ?? 'font-bold'} ${textTransform} ${sizes[data.size]}
        ${data.isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${getColor()} ${data.outline ? 'outline' : ''}
      `}
      type={data.type ?? 'button'}
      color={color}
      onClick={handleClick}
    >
      {data.children}
    </S.Container>
  )
}

export default Button
