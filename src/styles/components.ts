import { css } from 'styled-components'

export const Page = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 64px 0 56px;
`

export const Container = css`
  width: 900px;
  max-width: 96%;
  min-height: 696px;
  border: 1px solid rgba(243, 244, 246);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.14), 0 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border-radius: 4px;

  &.dark {
    border-color: rgba(17, 24, 39);
    background-color: ${({ theme }) => theme.colors.gray[800]};
  }
`
