import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ButtonColorsType } from '.'

type StyleProps = {
  color?: ButtonColorsType
}

function getColorBackground(color: ButtonColorsType) {
  let result: string

  switch (color) {
    case 'black':
      result = theme.colors.black
      break
    case 'white':
      result = theme.colors.gray[100]
      break
    case 'transparent':
      result = ''
      break
    default:
      result = theme.colors[color][500]
  }

  return result
}

export const Container = styled('button')<StyleProps>`
  ${({ color = 'blue' }) => css`
    &.outline {
      background: linear-gradient(
        90deg,
        transparent 48%,
        ${getColorBackground(color)} 52%
      );
      background-size: 220% 110%;
      background-position: left center;
      box-sizing: content-box;

      :hover {
        background-position: 98%;
      }
    }
  `}
`
