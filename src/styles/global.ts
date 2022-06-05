import { createGlobalStyle } from 'styled-components'
import { PokemonFont } from './fonts'

const GlobalStyles = createGlobalStyle`
  ${PokemonFont}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  html {
  }

  html, body, #__next {
    min-height: 100vh;
    position: relative;
  }
`

export default GlobalStyles
