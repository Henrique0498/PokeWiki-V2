import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 640px) {
    & {
      justify-content: space-between;
      flex-direction: row;
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

export const Details = styled.div`
  padding: 0 0 20px;
  display: flex;
  align-items: center;

  @media (min-width: 640px) {
    & {
      padding: 0;
    }
  }
`
