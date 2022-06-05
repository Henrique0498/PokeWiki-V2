import styled from 'styled-components'

export const Container = styled.div`
  &,
  .skeleton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skeleton > div {
    animation: pokebola 1s ease-in-out infinite;
  }

  @keyframes pokebola {
    to {
      transform: rotate(360deg);
    }
  }
`
