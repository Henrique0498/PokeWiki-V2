import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import 'tailwindcss/tailwind.css'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

import { AppProvider } from 'data/context/AppContext'
import { AuthProvider } from 'data/context/AuthContext'
import Background from 'components/Background'
import LoadingPage from 'components/Loading/FullScreen'
import Navbar from 'components/Navbar'
import TapBar from 'components/TapBar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PokeWiki</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <AppProvider>
          <AuthProvider>
            <LoadingPage />
            <Background />
            <div className={`relative`} style={{ zIndex: 2 }}>
              <Navbar />
              <Component {...pageProps} />
              <TapBar />
            </div>
          </AuthProvider>
        </AppProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
