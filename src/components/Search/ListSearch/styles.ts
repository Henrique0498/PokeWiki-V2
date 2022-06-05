import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  &::-webkit-scrollbar {
    padding: 20px 0;
    width: 8px;
  }

  ::-webkit-scrollbar-button {
    height: 4px;
    background: ${({ theme }) => theme.colors.gray[300]};
  }

  ::-webkit-scrollbar-button:start {
    height: 8px;
  }

  &.dark::-webkit-scrollbar-button {
    background: ${({ theme }) => theme.colors.gray[900]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[300]};
  }

  &.dark::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[900]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }

  &.dark::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray[900]};
  }
`

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
`

export const Icons = styled.div`
  width: 50px;
  height: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 135px;
    position: absolute;
    left: 5px;
    animation: iconsLoading linear 2s infinite;
  }

  @keyframes iconsLoading {
    5% {
      left: 5px;
    }
    25% {
      left: 5px;
    }

    40% {
      left: -40px;
    }
    60% {
      left: -40px;
    }

    75% {
      left: -90px;
    }
    95% {
      left: -90px;
    }
  }
`
