import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 1023px) {
    & {
      display: none;
    }
  }
`

export const SignUp = styled.div`
  width: 88px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all ease-in-out ${({ theme }) => theme.animation.duration.medium};

  :hover {
    font-weight: 500;
  }

  ::after {
    content: '';
    width: 0%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    background-color: ${({ theme }) => theme.colors.gray[50]};
    transition: all ease-in-out
      ${({ theme }) => theme.animation.duration.medium};
  }

  :hover::after {
    width: 108%;
  }
`

export const SignIn = styled.div``
