import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100vw - 32px);
  max-width: 400px;
  min-height: 520px;
  display: grid;
  grid-template-rows: 98px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'head'
    'body';
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.14), 0 3px 3px rgba(0, 0, 0, 0.2);
`

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    width: calc(100% - 16px);
    max-width: 320px;
    text-align: center;
  }

  @media (min-width: 420px) {
    & h2 {
      text-align: left;
    }
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: calc(100vw - 48px);
    max-width: 320px;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 40px;

  & > div {
    width: calc(100vw - 48px);
    max-width: 320px;
  }
`
