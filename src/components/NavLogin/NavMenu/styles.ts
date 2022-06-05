import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0px;
`

export const Login = styled.div`
  .logout {
    background: linear-gradient(
      90deg,
      transparent 50%,
      ${({ theme }) => theme.colors.red[500]} 50%,
      ${({ theme }) => theme.colors.red[600]} 100%
    );
    background-size: 200% 100%;
  }

  .signUp {
    background: linear-gradient(
      90deg,
      transparent 50%,
      ${({ theme }) => theme.colors.indigo[500]} 50%,
      ${({ theme }) => theme.colors.indigo[600]} 100%
    );
    background-size: 200% 100%;
  }

  .signIn {
    background: linear-gradient(
      90deg,
      transparent 50%,
      ${({ theme }) => theme.colors.purple[500]} 50%,
      ${({ theme }) => theme.colors.purple[600]} 100%
    );
    background-size: 200% 100%;
  }

  .login {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    color: ${({ theme }) => theme.colors.gray[800]};
    background-position-x: 0%;
    transition: all ease-in-out
      ${({ theme }) => theme.animation.duration.medium};
  }

  .login:hover {
    color: ${({ theme }) => theme.colors.white};
    background-position-x: 100%;
    font-weight: 500;
  }

  &.dark .login {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`

export const User = styled.div`
  @media (min-width: 320px) {
    & {
      display: none;
    }
  }
`
