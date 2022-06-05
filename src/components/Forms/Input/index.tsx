import { useRef, useState } from 'react'

import useAppData from 'hooks/useAppData'
import { InputType } from 'types/forms'

import * as S from './styles'
import { ColorsType } from 'types/tailwindcss'
import { IconEye, IconEyeOff } from 'components/Icons'

export interface InputProps extends InputType {
  className?: string
  icon?: React.ReactNode
  color?: ColorsType
  outline?: boolean
  error: string
  orderReverse?: boolean
  onClick?: () => void
  onFocus?: () => void
  onBlur: () => void
}

const Input = ({
  color = 'blue',
  icon,
  outline,
  className,
  orderReverse,
  error,
  onClick,
  type = 'text',
  ...input
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { theme } = useAppData()
  const [typeInput, setTypeInput] = useState(type)

  function renderIcon() {
    if (icon) {
      return (
        <button
          className={`flex justify-center items-center h-full
          ${orderReverse ? 'rounded-l-sm order-1' : 'rounded-r-sm'}
          ${
            outline ? 'bg-transparent w-9' : 'bg-gray-200 dark:bg-gray-900 w-10'
          }
          text-${getColor(color)}-600 hover:text-${getColor(color)}-600
        `}
          type="button"
          onClick={() => handleClick()}
        >
          {icon}
        </button>
      )
    }

    return null
  }

  function renderViewPassword() {
    if (type === 'password') {
      return (
        <button
          className={`flex justify-center items-center w-8 h-full
            bg-transparent border-0 order-4
            text-${getColor(color)}-600 hover:text-${getColor(color)}-600
          `}
          type="button"
          onClick={() => handleViewPassword()}
        >
          {typeInput === 'password' ? (
            <IconEye size={5} />
          ) : (
            <IconEyeOff size={5} />
          )}
        </button>
      )
    }

    return null
  }

  function handleViewPassword() {
    if (typeInput === 'password') {
      setTypeInput('text')
    } else {
      setTypeInput('password')
    }
  }

  function handleClick() {
    if (onClick) {
      onClick()
    } else {
      ref.current?.focus()
    }
  }

  function getColor(value: ColorsType) {
    let result: ColorsType

    if (error === '') {
      switch (value) {
        case 'black':
          result = 'blue'
          break
        case 'white':
          result = 'blue'
          break
        default:
          result = value
      }
    } else {
      result = 'red'
    }

    return result
  }

  return (
    <S.Container
      themeColor={theme ?? ''}
      className={`w-full flex items-start relative
        ${input.value ? 'active' : ''} ${orderReverse ? 'reverse' : ''}
        ${className}
      `}
    >
      <S.Label
        themeColor={theme ?? ''}
        onClick={() => ref.current?.focus()}
        color={getColor(color)}
        className={`w-full h-10 absolute top-2 flex items-center justify-center
          ${orderReverse ? 'flex-row-reverse reverse' : ''} rounded-sm
          ${error ? 'error' : ''} ${input.value ? 'active' : ''}
          ${
            outline
              ? 'box-border border-2 border-transparent bg-gray-200 dark:bg-gray-900 outline'
              : 'bg-gray-100 dark:bg-gray-700 default'
          }
        `}
      >
        <input
          ref={ref}
          id={input.id}
          type={typeInput ?? 'text'}
          value={input.value}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          autoComplete={input.autoComplete ?? 'off'}
          placeholder={outline ? '' : input.placeholder}
          onChange={(e) => input.onChange(e)}
          className={`h-full flex-grow font-medium
            rounded-l-sm bg-transparent
            ${orderReverse ? 'p-0 order-4' : 'p-3'}
            ${type === 'password' ? 'password' : ''}
            placeholder-${getColor(color)}-400
            text-${getColor(color)}-500
            dark:text-gray-200
            dark:placeholder-${getColor(color)}-600
          `}
        />
        {renderIcon()}
        {renderViewPassword()}
      </S.Label>
      {outline && (
        <p
          onClick={() => ref.current?.focus()}
          className={`text-${getColor(color)}-600`}
        >
          {input.placeholder}
        </p>
      )}
      {error && (
        <S.Error className="w-full flex items-end text-sm">
          <p className="text-red-500 dark:text-red-600 py-1 px-2">{error}</p>
        </S.Error>
      )}
    </S.Container>
  )
}

export default Input
