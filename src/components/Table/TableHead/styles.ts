import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & .search {
    height: 40px;

    label {
      top: 0px;
    }
  }

  @media (min-width: 640px) {
    & {
      flex-direction: row;
    }
  }
`
