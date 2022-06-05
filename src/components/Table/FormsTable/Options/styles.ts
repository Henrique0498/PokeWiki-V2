import styled from 'styled-components'
import theme from 'styles/theme'
import { ThemeType } from 'types/system'
import { shade } from 'polished'

function getColorBackground(fTheme: ThemeType) {
  if (fTheme === 'dark') {
    return shade(0.2, theme.colors.gray[700])
  }

  return theme.colors.white
}

export const Container = styled.div``

export const ListContainer = styled.div`
  width: 100%;
  transition: all 0.3s all;
  animation: listPage 0.18s linear;
  position: absolute;
  right: 0px;
  bottom: 46px;
  background: ${theme.colors.white};
  box-shadow: 1px 1px 6px 2px rgb(0, 0, 0, 0.2);
  display: none;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  }

  &.dark {
    background: ${getColorBackground('dark')};
  }

  &.dark::-webkit-scrollbar-thumb {
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }

  &.show {
    display: block;
  }

  @keyframes listPage {
    0% {
      width: 0px;
      height: 0px;
      overflow: hidden;
      border-top-left-radius: 200px;
    }
    100% {
      overflow: hidden;
    }
  }
`
