import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;

  & > div {
    width: 100vw;
    height: 100%;
  }

  &.dark > div {
    background-color: ${({ theme }) => theme.colors.black};
  }
`
