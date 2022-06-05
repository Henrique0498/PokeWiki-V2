import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ColorsType } from 'types/tailwindcss'

type InputStyleProps = {
  themeColor: string
  color: ColorsType
}

type ContainerStyleProps = {
  themeColor: string
}

function getColorBorder(value: string, color: ColorsType) {
  let result = ''

  switch (value) {
    case 'dark':
      result = theme.colors[color][700]
      break
    default:
      result = theme.colors[color][500]
  }

  return result
}

function getColorBackground(value: string) {
  let result = ''

  switch (value) {
    case 'dark':
      result = theme.colors.gray[900]
      break
    default:
      result = theme.colors.gray[200]
  }

  return result
}

export const Container = styled('div')<ContainerStyleProps>`
  ${({ themeColor }) => css`
    height: 68px;

    & > p {
      position: absolute;
      transition: all linear ${({ theme }) => theme.animation.duration.xxFast};
      user-select: none;
      top: 20px;
      line-height: 16px;
      left: 8px;
      z-index: 6;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      background: linear-gradient(
        0deg,
        transparent 40%,
        ${getColorBackground(themeColor)} 40%,
        ${getColorBackground(themeColor)} 60%,
        transparent 60%
      );
      padding: 0 5px;
    }

    &.reverse > p {
      left: 34px;
    }

    &:focus-within p,
    &.active p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      top: 0px;
    }
  `}
`

export const Label = styled('label')<InputStyleProps>`
  ${({ themeColor, color }) => css`
    display: grid;
    grid-template-columns: 1fr 40px auto;

    &.reverse {
      grid-template-columns: 40px 1fr auto;
    }

    &.outline {
      grid-template-columns: 1fr 36px auto;

      &.reverse {
        grid-template-columns: 36px 1fr auto;
      }
    }

    &.outline:focus-within,
    &.outline.active {
      border-color: ${getColorBorder(themeColor, color)};
    }

    &.default {
      & input,
      & button {
        z-index: 2;
      }

      ::before {
        content: '';
        width: calc(100% + 4px);
        height: 0px;
        position: absolute;
        border-left: 2px solid ${getColorBorder(themeColor, color)};
        border-radius: 3px;
        transition: all 0.2s;
        z-index: 1;
      }

      &.reverse {
        ::before {
          border-left: 0px;
          border-right: 2px solid ${getColorBorder(themeColor, color)};
        }
      }

      &:focus-within::before,
      &.active::before {
        transition: all 0.2s;
        height: 40px;
      }
    }

    & input {
      width: 100%;
      padding-right: 8px;
    }

    & input.password {
      padding-right: 0;
    }

    &.default input {
      padding: 0 12px;
    }

    &.default button:hover svg {
      color: ${({ theme }) => theme.colors[color][500]};
    }

    &.error {
      animation: errorLabel linear
        ${({ theme }) => theme.animation.duration.xxSlow};
    }

    @keyframes errorLabel {
      0% {
        left: 10px;
      }
      25% {
        left: -10px;
      }
      50% {
        left: 10px;
      }
      75% {
        left: -10px;
      }
    }
  `}
`

export const Error = styled.div`
  height: 72px;
`
