import styled from 'styled-components'

export const Container = styled.header`
  top: -64px;
  z-index: 100;
  display: flex;
  justify-content: space-between;

  &.active {
    top: 0px;
  }

  &.dark {
    background-color: ${({ theme }) => theme.colors.gray[800]};
  }

  & li a {
    margin: 0 10px;
    cursor: pointer;
    transition: all ${({ theme }) => theme.animation.duration.fast};
    opacity: 0.8;
    display: flex;
  }

  & li .navActive,
  & li a:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    & {
      justify-content: space-between;
    }
  }
`
