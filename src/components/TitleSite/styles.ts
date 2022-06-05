import styled from 'styled-components'

export const Container = styled.h2`
  .title {
    font-family: ${({ theme }) => theme.font.fontFamily.pokemon};
    display: flex;
    line-height: 140%;
    letter-spacing: 3px;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: #1a63e0;
  }

  .title::after {
    font-family: ${({ theme }) => theme.font.fontFamily.pokemon};
    content: 'PokeWiki';
    position: absolute;
    -webkit-text-stroke-width: 0px;
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]}
    );
    background: linear-gradient(
      left,
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[100]},
      ${({ theme }) => theme.colors.yellow[300]},
      ${({ theme }) => theme.colors.yellow[300]}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-clip: text;
    color: transparent;
    animation: animeText 2.5s linear infinite;
  }

  @keyframes animeText {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`
