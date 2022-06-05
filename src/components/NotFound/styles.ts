import styled from 'styled-components'

import * as SGlobal from 'styles/components'

export const Container = styled.div`
  ${SGlobal.Container}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.dark {
    border-color: rgba(17, 24, 39);
  }
`

export const Icon = styled.div`
  width: 30vw;
  max-width: 220px;
  height: 56vw;
  max-height: 400px;
  position: relative;

  ::before {
    content: '';
    width: 30vw;
    max-width: 180px;
    padding-top: 20%;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    left: 30%;
    bottom: -2%;
  }
`

export const Pokebola = styled.div`
  width: 30vw;
  max-width: 220px;
  height: 30vw;
  max-height: 220px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.red[500]} 50%,
    ${({ theme }) => theme.colors.gray[100]} 50%
  );
  border-radius: 50%;
  transform: rotate(-25deg);
  border: 1px solid black;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      135deg,
      rgb(255, 255, 255, 0.2) 15%,
      rgb(0, 0, 0, 0.2) 85%
    );
    border-radius: 50%;
  }

  ::before {
    content: '';
    width: 25%;
    height: 8%;
    background: rgb(255, 255, 255, 0.2);
    position: absolute;
    top: 14%;
    left: 14%;
    border-radius: 50%;
    transform: rotate(-35deg);
  }

  > .line {
    width: 101%;
    height: 12.5%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.gray[900]} 0.5%,
      ${({ theme }) => theme.colors.gray[900]} 99.5%,
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;

    ::after,
    ::before {
      content: '';
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.gray[700]};
      box-shadow: 0px 2px 1px rgb(0, 0, 0, 0.3);
      border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};
      border-left: 2px solid ${({ theme }) => theme.colors.gray[500]};
      border-right: 2px solid ${({ theme }) => theme.colors.gray[700]};
      box-sizing: border-box;
    }
  }

  > .circle {
    width: 33%;
    height: 33%;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.colors.gray[700]} 34%,
      transparent 34%,
      transparent 64%,
      ${({ theme }) => theme.colors.gray[700]} 64%
    );
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    ::before {
      content: '';
      width: 92%;
      height: 92%;
      background-color: ${({ theme }) => theme.colors.gray[900]};
      position: absolute;
      border-radius: 50%;
    }

    ::after {
      content: '';
      width: 64%;
      height: 64%;
      background-color: ${({ theme }) => theme.colors.gray[50]};
      position: absolute;
      border-radius: 50%;
      box-shadow: 1px 1px 0px rgb(0, 0, 0, 0.3), 2px 2px 1px rgb(0, 0, 0, 0.3);
    }
  }
`

export const Pikachu = styled.div`
  position: absolute;
  left: -6%;
  z-index: 2;
  top: 0;

  svg {
    height: 30vw;
    max-height: 220px;
  }

  ::after {
    content: '';
    width: 15vw;
    max-width: 120px;
    padding-top: 20%;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.4);
    position: absolute;
    left: 34%;
    bottom: -2%;
    z-index: -1;
  }
`

export const Error = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 200px));
  padding: 10px;
  font-size: 40vw;
  font-family: ${({ theme }) => theme.font.fontFamily.pokemon};
  line-height: 40vw;
  color: ${({ theme }) => theme.colors.blue[500]};
  text-shadow: 10px 10px 0px ${({ theme }) => theme.colors.yellow[500]};

  & > span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media (min-width: 640px) {
    & {
      font-size: 15rem;
      line-height: 240px;
    }
  }
`

export const Message = styled.div`
  text-align: center;
  padding: 20px 10px;
  font-size: 24px;

  @media (max-width: 639px) {
    & > span {
      display: block;
    }
  }
`
