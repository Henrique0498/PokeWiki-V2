import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Forms = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .on {
    z-index: 10;
    position: relative;
    overflow: hidden;
  }

  & > .off {
    width: calc(100vw - 64px);
    max-width: 380px;
    height: 380px;
    min-height: 380px;
    position: absolute;
    top: -10px;
    background: ${({ theme }) => theme.colors.gray[100]};
    overflow: hidden;
    z-index: 1;
  }

  &.dark > .off {
    background: ${({ theme }) => shade(0.3, theme.colors.gray[800])};
  }

  & > .active {
    animation: activeForm linear
      ${({ theme }) => theme.animation.duration.xxSlow};
    transform-style: preserve-3d;
  }

  & > .disable {
    animation: disableForm linear
      ${({ theme }) => theme.animation.duration.xxSlow};
    transform-style: preserve-3d;
  }

  @keyframes activeForm {
    0% {
      width: calc(100vw - 64px);
      max-width: 380px;
      transform: perspective(500px) rotateY(180deg);
      min-height: 380px;
      height: 380px;
    }
    50% {
      width: calc(100vw - 64px);
      max-width: 380px;
      min-height: 380px;
      height: 380px;
    }
    100% {
      transform: perspective(500px) rotateY(0deg);
    }
  }

  @keyframes disableForm {
    0% {
      transform: perspective(500px) rotateY(0deg);
      z-index: 11;
    }
    50% {
      z-index: 11;
      min-height: 380px;
      height: 380px;
    }
    51% {
      z-index: 09;
    }
    100% {
      transform: perspective(500px) rotateY(-180deg);
    }
  }
`
