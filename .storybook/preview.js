import { themes } from '@storybook/theming'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from 'data/context/AppContext'

import GlobalStyles from '../src/styles/global'
import './styles.css'
import theme from '../src/styles/theme'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'light' },
    current: 'dark'
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <Story />
      </AppProvider>
    </ThemeProvider>
  )
]
