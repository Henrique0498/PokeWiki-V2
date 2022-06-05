import styled, { css } from 'styled-components'

interface TapBarNavigationStylesProps {
  items: number
}

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  z-index: 100;
`

export const Navigation = styled('ul')<TapBarNavigationStylesProps>`
  ${({ items }) => css`
    width: calc((50px * ${items}) + 32px);
    max-width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    padding: 0 16px;
  `}
`
