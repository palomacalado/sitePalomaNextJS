import React from 'react'
import Head from 'next/head'
import Welcome from '../components/welcome/welcome'
import AboutMe from '../components/about-me/about-me'

const Home: React.FC = () => {
  return (
    <>
      <Head children={undefined}>
        <title>Paloma Calado</title>
      </Head>

      <main>
      
        <Welcome />
        <AboutMe />
      </main>
    </>
  )
}

export default Home
