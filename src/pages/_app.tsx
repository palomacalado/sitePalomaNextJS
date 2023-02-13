import React, { useContext } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Contact from '../components/contact/contact'
import Nav from '../components/nav/nav'
import { AuthProvider } from '../contexts/auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Head>
          <title>Paloma Calado</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&family=Vidaloka&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* <Contact /> */}
        <Nav />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
