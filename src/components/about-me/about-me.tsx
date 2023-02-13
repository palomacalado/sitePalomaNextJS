import React from 'react'
import about from '../../../public/assets/images/sobremim .png'
import Image from 'next/image'
import { AboutMeStyle, Description, H3, H4, Hiperlink } from './styles'

const AboutMe: React.FC = () => {
  return (
    <AboutMeStyle>
      <div>
        {/* <Image
          src={about}
          alt="colagem de fotos de Paloma Calado"
          width={600}
          height={600}
        /> */}
      </div>
      <Description>
        <H3>A vida é curta demais para fazer uma coisa só!</H3> Sou Paloma
        Calado, 27 anos, moradora do Compelexo da Maré, <br />
        conjunto de Favelas do Rio de Janeiro. Se você chegou até aqui é<br />
        porque está interessada em me conhecer meu trabalho, mas vamos por{' '}
        <br /> partes! Por muito tempo me senti culpada por não me interessar
        por um assunto <br />
        somente então, recentemente descobri que sou nada mais, nada menos{' '}
        <br />
        que <b>M U L T I P O T E N C I A L</b>. A partir dessa descoberta
        abracei minha
        <br />
        diversidade e aceitei que a menina programadora também ama costurar e
        crochetar!
        <H4>É sobre isso, e tá tudo bem!</H4>
        Por aqui você encontrará meu trabalho como desenvolvedora e Criadora de
        conteúdo! <br />
        Para conhecer cada um com mais detalhes você pode clicar{' '}
        <Hiperlink href="/projetos">
          {' '}
          <b>aqui</b>{' '}
        </Hiperlink>{' '}
        ou selecionar a aba Projetos
      </Description>
    </AboutMeStyle>
  )
}
export default AboutMe
