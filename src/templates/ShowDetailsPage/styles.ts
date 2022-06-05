import styled from 'styled-components'

import * as SGlobal from 'styles/components'
import theme from 'styles/theme'

export const Page = styled.div`
  ${SGlobal.Page}
`

export const Container = styled.div`
  ${SGlobal.Container}

  overflow: visible;
  display: grid;
  grid-template-rows: auto 1fr;
`
export const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Image = styled.div`
  position: relative;
  margin-top: -70px;
  overflow: hidden;
  background: #000;

  ::before {
    content: '';
    width: 150%;
    height: 150%;
    position: absolute;
    background-image: conic-gradient(
      ${theme.colors.purple[500]} 20deg,
      transparent 120deg,
      transparent 180deg,
      ${theme.colors.blue[500]} 180deg,
      ${theme.colors.blue[500]} 200deg,
      transparent 380deg
    );
    animation: borderAnimation 2s linear infinite;
  }

  @keyframes borderAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const Name = styled.h1``

export const Body = styled.div``
