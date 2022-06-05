import styled, { css } from 'styled-components'

type ColorProps = {
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

export const Container = styled('div')<ColorProps>`
  ${({ dark, light }) => css`
    background: ${light.top};
    background: linear-gradient(180deg, ${light.top} 50%, ${light.button} 50%);

    div {
      background: ${light.middle};
    }

    .bar {
      height: 8%;
    }

    .button {
      width: 23%;
      height: 23%;
    }

    &.dark {
      background: linear-gradient(180deg, ${dark.top} 50%, ${dark.button} 50%);

      div {
        background: ${dark.middle};
      }
    }
  `}
`
