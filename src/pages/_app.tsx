import React, { useContext } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Contact from '../components/contact/contact'
import Nav from '../components/nav/nav'
import { AuthProvider } from '../contexts/auth'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <Contact />
          <Nav />
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
