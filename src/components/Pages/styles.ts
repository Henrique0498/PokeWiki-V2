import { transparentize } from 'polished'
import styled from 'styled-components'

import theme from 'styles/theme'

export const Content = styled.div``

export const Head = styled.div`
  padding: 0 6px;
  background-color: ${transparentize(0.9, theme.colors.blue[500])};

  ul {
    display: flex;
  }

  li {
    width: 100%;
    max-width: 200px;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    transition: all ${theme.animation.duration.medium};
    position: relative;

    :hover {
      background-color: ${transparentize(0.8, theme.colors.blue[600])};
    }
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    color: ${theme.colors.blue[600]};
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }

    svg path {
      stroke-width: 1.5px;
    }
  }

  li.active a {
    background-color: ${theme.colors.blue[500]};
    color: ${theme.colors.blue[100]};
  }

  &.dark {
    a {
      color: ${theme.colors.blue[600]};
    }

    li.active a {
      background-color: ${theme.colors.blue[600]};
      color: ${theme.colors.blue[50]};
    }
  }
`

export const Body = styled.div``
