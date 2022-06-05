import styled from 'styled-components'

export const Container = styled.div`
  .border-animation {
    position: relative;
    overflow: hidden;
  }

  .border-animation::before {
    content: '';
    width: 150%;
    height: 150%;
    position: absolute;
    background-image: conic-gradient(
      ${({ theme }) => theme.colors.purple[500]} 20deg,
      transparent 120deg,
      transparent 180deg,
      ${({ theme }) => theme.colors.blue[500]} 180deg,
      ${({ theme }) => theme.colors.blue[500]} 200deg,
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

export const MenuBar = styled.div`
  .iconMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
  }

  .iconMenu::before,
  .iconMenu span,
  .iconMenu::after {
    content: '';
    width: 28px;
    height: 4px;
    position: absolute;
    background-color: currentColor;
    opacity: 0.8;
    border-radius: 2px;
    transition: all ease-in-out
      ${({ theme }) => theme.animation.duration.medium};
  }

  .iconMenu::before {
    top: 9px;
  }

  .iconMenu::after {
    bottom: 9px;
  }

  .iconMenu.active::before,
  .iconMenu.active::after {
    top: auto;
    bottom: auto;
  }

  .iconMenu.active::before {
    transform: rotate(45deg);
  }

  .iconMenu.active span {
    transform: rotate(135deg);
    opacity: 0;
  }

  .iconMenu.active::after {
    transform: rotate(-45deg);
  }

  @media (min-width: 320px) {
    &.logged {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    &.notLogged {
      display: none;
    }
  }
`
