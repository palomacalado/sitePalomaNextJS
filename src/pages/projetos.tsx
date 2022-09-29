import React from 'react';
import styled from "styled-components";
import Developer from '../components/developer/developer';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 3vh;
  background-color: #f0e7e2;
`;
const H3 = styled.h3`
  height: "160px";
  color: "#fff";
  background: "#364d79";
`;
const Cards = styled.div`
  width: 80vw;
  margin: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Projetos: React.FC = ()=>{
    return (
        <Container>
          <H3>Desenvolvedora</H3>
            <Cards>
              <Developer />
            </Cards>
          Separar em duas sessões:
          <br /> programação(projetos que já desenvolvi tipo o jogo e os que
          desenvolverei hahah)
          <br />
          Criadora de conteúdo: ter uma parte para os conteudos recentes do youtube
          e os mais visualizados
          <br />
          colocar os trabalhos que fiz
        </Container>
      );
    
}
export default Projetos