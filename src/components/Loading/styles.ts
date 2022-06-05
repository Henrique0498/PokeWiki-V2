import styled, { css } from 'styled-components'
import theme from 'styles/theme'

type LoadingStyleProps = {
  themeProps?: string
}

function getColorBackground(fTheme = '') {
  if (fTheme === 'dark') {
    return theme.colors.gray[800]
  }
  return theme.colors.white
}

export const Container = styled('div')<LoadingStyleProps>`
  ${({ themeProps }) => css`
    & .spinner {
      animation: spinnerAnimation ease-in-out infinite;
    }

    & .spinner > div {
      position: absolute;
    }

    & .spinner > .fragment,
    & .spinner > .strip,
    & .spinner .middle {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }

    & .spinner > .fragment {
      background: radial-gradient(
          50% 50% at 50% 50%,
          ${getColorBackground(themeProps)} 75%,
          rgba(0, 0, 0, 0) 76%
        ),
        conic-gradient(
          from 90deg at 50% 50%,
          rgba(255, 0, 0, 0) 44deg,
          ${({ theme }) => theme.colors.gray[200]} 44deg,
          ${({ theme }) => theme.colors.gray[200]} 136deg,
          rgba(255, 0, 0, 0) 136deg,
          rgba(255, 0, 0, 0) 224deg,
          ${({ theme }) => theme.colors.red[500]} 224deg,
          ${({ theme }) => theme.colors.red[500]} 316deg,
          rgba(255, 0, 0, 0) 316deg
        );
      background-position: center;

      ::after {
        content: '';
        border-radius: 50%;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${getColorBackground(themeProps)} 75%,
            rgba(0, 0, 0, 0) 76%
          ),
          conic-gradient(
            from 180deg at 50% 50%,
            rgba(255, 0, 0, 0) 45deg,
            ${({ theme }) => theme.colors.gray[200]} 45deg,
            ${({ theme }) => theme.colors.gray[200]} 90deg,
            ${({ theme }) => theme.colors.red[500]} 90deg,
            ${({ theme }) => theme.colors.red[500]} 135deg,
            rgba(255, 0, 0, 0) 135deg,
            rgba(255, 0, 0, 0) 225deg,
            ${({ theme }) => theme.colors.red[500]} 225deg,
            ${({ theme }) => theme.colors.red[500]} 270deg,
            ${({ theme }) => theme.colors.gray[200]} 270deg,
            ${({ theme }) => theme.colors.gray[200]} 315deg,
            rgba(255, 0, 0, 0) 315deg
          );
        background-position: center;
      }
    }

    & .spinner > .fragment.sm {
      width: 45%;
      height: 45%;
      animation: fragmentSm ease-in-out infinite;
      background-size: 100% 100%;

      ::after {
        background: none;
      }
    }

    & .spinner > .fragment.notGrow {
      width: 45%;
      height: 45%;
      background: none;

      ::after {
        width: 100%;
        height: 100%;
      }
    }

    & .spinner > .fragment.md {
      width: 55%;
      height: 55%;
      background-size: 107% 107%;
      animation: fragmentLg ease-in-out infinite;

      ::after {
        width: 100%;
        height: 100%;
        background-size: 107% 107%;
        animation: fragmentMd ease-in-out infinite;
      }
    }

    & .spinner > .fragment.lg {
      width: 65%;
      height: 65%;
      background-size: 110% 110%;
      animation: fragmentXXlg ease-in-out infinite;

      ::after {
        width: 100%;
        height: 100%;
        background-size: 110% 110%;
        animation: fragmentXlg ease-in-out infinite;
      }
    }

    & .spinner > .fragmentMiddle {
      width: 35%;
      height: 35%;
      background: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.gray[200]} 50%,
        ${({ theme }) => theme.colors.red[500]} 50%
      );
    }

    & .spinner > .strip {
      width: 65%;
      height: 5%;
      border-radius: 0px;
      background: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.gray[500]} 10%,
        ${getColorBackground(themeProps)} 10%,
        ${getColorBackground(themeProps)} 90%,
        ${({ theme }) => theme.colors.gray[500]} 90%
      );
      animation: strip ease-in-out infinite;

      ::after {
        content: '';
        width: 97%;
        height: 12px;
        background-color: black;
      }
    }

    .middle {
      width: 25%;
      height: 25%;
      background-color: black;
      animation: middle ease-in-out infinite;

      ::before {
        content: '';
        width: 70%;
        height: 70%;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.gray[200]};
        border-radius: 50%;
      }

      ::after {
        content: '';
        width: 40%;
        height: 40%;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.gray[500]};
      }
    }

    & .spinner,
    & .spinner > .fragment.sm,
    & .spinner > .fragment.md,
    & .spinner > .fragment.md::after,
    & .spinner > .fragment.lg,
    & .spinner > .fragment.lg::after,
    & .spinner > .strip,
    .middle {
      animation-duration: 1s;
    }

    @keyframes spinnerAnimation {
      to {
        transform: rotate(-720deg);
      }
    }

    @keyframes fragmentSm {
      50% {
        width: 55%;
        height: 55%;
        background-size: 105% 105%;
      }
    }

    @keyframes fragmentMd {
      50% {
        width: 86%;
        height: 86%;
        background-size: 108% 108%;
      }
    }

    @keyframes fragmentLg {
      50% {
        width: 75%;
        height: 75%;
        background-size: 114% 114%;
      }
    }

    @keyframes fragmentXlg {
      50% {
        width: 89%;
        height: 89%;
        background-size: 115% 115%;
      }
    }

    @keyframes fragmentXXlg {
      50% {
        width: 95%;
        height: 95%;
        background-size: 116% 116%;
      }
    }

    @keyframes strip {
      50% {
        width: 85%;
      }
    }

    @keyframes middle {
      to {
        transform: rotate(720deg);
      }
    }
  `}
`
