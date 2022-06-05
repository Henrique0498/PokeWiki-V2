import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-rows: 40px 0px;
  z-index: 50;

  & label {
    top: 0;
  }

  & .input {
    height: 40px;
    z-index: 2;
  }
`
