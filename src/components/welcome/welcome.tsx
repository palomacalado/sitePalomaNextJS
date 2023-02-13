import Head from 'next/head'
import { NextPage } from 'next/types'
import{ Container, MainText, Title } from './styles';
import Image from 'next/image';
import foto from "../../../public/assets/images/Websites.png";

const Welcome: NextPage = () => {
  return (
    <Container>
      <Title>
        <h1> Paloma Calado</h1>
        <p>
         Desenvolvedora Web e Criadora de conteúdo
        </p>
      </Title>
        
        <MainText>

      <Image src={foto} alt="foto de Paloma Calado"  />
        </MainText>
      </Container>
  )
}

export default Welcome