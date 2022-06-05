import styled, { css } from 'styled-components'
import { ColorsType } from 'types/tailwindcss'

type TdStyledProps = {
  color?: ColorsType
}

export const Td = styled('td')<TdStyledProps>`
  ${({ color = 'blue' }) => css`
    .hexagon {
      width: 34px;
      height: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1px;
      background: ${({ theme }) => theme.colors[color][500]};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors[color][300]};
    }
    .hexagon::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -13px;
      left: 0;
      z-index: 1;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-bottom: 13px solid ${({ theme }) => theme.colors[color][500]};
    }
    .hexagon:after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      bottom: -13px;
      left: 0;
      z-index: 1;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-top: 13px solid ${({ theme }) => theme.colors[color][500]};
    }

    .hexagon > div {
      z-index: 2;
    }
  `}
`
