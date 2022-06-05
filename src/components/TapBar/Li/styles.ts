import styled, { css } from 'styled-components'

interface TapBarListStylesProps {
  items: number
}

export const Container = styled('li')<TapBarListStylesProps>`
  ${({ items }) => css`
    position: relative;
    width: calc(100% / ${items});
    height: 60px;
    z-index: 10;

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-align: center;
      font-weight: 500;
      flex-wrap: wrap;
      user-drag: none;
      color: currentColor;

      .icon {
        width: 44%;
        height: 44%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: ${({ theme }) => theme.animation.duration.xxSlow};
      }

      svg:first-child {
        opacity: 1;
        position: absolute;
      }

      svg:last-child {
        opacity: 0;
      }

      svg {
        width: 100%;
        color: currentColor;
      }

      .text {
        position: absolute;
        font-size: 12px;
        letter-spacing: 0.05em;
        transition: ${({ theme }) => theme.animation.duration.xxSlow};
        opacity: 0;
        color: currentColor;
        transform: translateY(20px);
      }
    }

    &.active a {
      .icon {
        transform: translateY(-35px);

        svg:first-child {
          opacity: 0;
        }

        svg:last-child {
          opacity: 1;
        }
      }

      .text {
        opacity: 1;
        transform: translateY(12px);
      }
    }
  `}
`
