import { shade } from 'polished'
import styled, { css } from 'styled-components'

import theme from 'styles/theme'

interface TapBarBackgroundStylesProps {
  items: number
  itemActive: number
}

export const Container = styled('div')<TapBarBackgroundStylesProps>`
  ${({ items, itemActive }) => css`
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    padding: 0 13px;
    overflow: hidden;
    border-radius: 10px;
    box-sizing: border-box;
    border-left: 3px solid ${({ theme }) => theme.colors.violet[500]};
    border-right: 3px solid ${({ theme }) => theme.colors.violet[500]};
    transition: ${({ theme }) => theme.animation.duration.xxSlow};

    .background {
      position: absolute;
      display: flex;
      width: calc((100% - 26px) / ${items});
      height: 60px;
      background: transparent;
      justify-content: center;
      align-items: flex-start;
      transition: ${({ theme }) => theme.animation.duration.xxSlow};
      transform: translateX(calc(100% * ${itemActive}));

      ::after,
      ::before {
        content: '';
        position: absolute;
        width: calc(100vw + 18px);
        height: 60px;
        background: ${shade(0.08, theme.colors.white)};
      }

      ::after {
        left: 116%;
      }

      ::before {
        right: 116%;
      }

      .icon {
        width: 140%;
        position: absolute;
        display: flex;
        justify-content: center;
      }

      svg {
        width: 100%;
        color: ${shade(0.08, theme.colors.white)};
      }
    }

    &.dark {
      border-color: ${({ theme }) => theme.colors.violet[600]};

      .background {
        ::after,
        ::before {
          background: ${shade(0.2, theme.colors.gray[800])};
        }
      }

      svg {
        color: ${shade(0.2, theme.colors.gray[800])};
      }
    }

    &.desative {
      background: ${shade(0.08, theme.colors.white)};

      &.dark {
        background: ${shade(0.2, theme.colors.gray[800])};
      }
    }
  `}
`
