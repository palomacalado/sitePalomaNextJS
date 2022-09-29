import Head from 'next/head'
import { NextPage } from 'next/types'
import{ Container, MainText } from './styles';
import Image from 'next/image';
import foto from "../../../public/assets/images/imagemprincipal.png";

const Welcome: NextPage = () => {
  return (
    <Container>
      <MainText>
        <h1> Olá, eu sou Paloma Calado!</h1>
        <p>
          Praparado para conhecer meu trabalho?! <br />
          Você irá se surpreender!
        </p>
        <button>Veja aqui</button>
      </MainText>
      {/*  */}
      <Image src={foto} alt="foto de Paloma Calado"  />
      </Container>
  )
}

export default Welcome