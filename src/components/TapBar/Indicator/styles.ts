import styled, { css } from 'styled-components'

interface TapBarIndicatorStylesProps {
  items: number
  itemActive: number
}

export const Container = styled('div')<TapBarIndicatorStylesProps>`
  ${({ items, itemActive }) => css`
    position: absolute;
    width: calc((100% - 32px) / ${items});
    height: 60px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    transition: ${({ theme }) => theme.animation.duration.xxSlow};
    z-index: 1;
    transform: translateX(calc(100% * ${itemActive}));

    ::after {
      position: absolute;
      content: '';
      width: 100%;
      padding: 50%;
      top: -50%;
      background: ${({ theme }) => theme.colors.violet[500]};
      border-radius: 50%;
      transition: 0.5s;
    }

    &.dark {
      ::after {
        background: ${({ theme }) => theme.colors.violet[600]};
      }
    }

    &.desative::after {
      top: 5px;
      opacity: 0;
    }
  `}
`
