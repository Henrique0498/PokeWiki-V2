import styled from 'styled-components'

import * as SGlobal from 'styles/components'

export const Container = styled.div`
  ${SGlobal.Container}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.dark {
    border-color: rgba(17, 24, 39);
  }
`
