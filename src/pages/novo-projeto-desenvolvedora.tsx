import { NextPage } from 'next'
import styled from 'styled-components'
import FormDev from '../components/form-dev/form-dev'

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #f0e7e2, #98737b);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjetoDesenvolvedora: NextPage = () => {
  return (
    <Container>
      <FormDev />
    </Container>
  )
}

export default ProjetoDesenvolvedora
