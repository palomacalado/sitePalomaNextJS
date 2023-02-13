import styled from 'styled-components'
import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import Link from 'next/link'

const CommunityStyle = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #f0e7e2, #98737b);
  display: flex;
  justify-content: right;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`
const Comunidade: React.FC = () => {
  const { logout }: any = useContext(AuthContext)
  const { user }: any = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <CommunityStyle>
      {user?.email === 'palomacalado@yahoo.com.br' && (
        <Link href="/novo-projeto-desenvolvedora">
          <Button variant="contained" size="small" color="secondary">
            Adicionar projeto desenvolvedora
          </Button>
        </Link>
      )}
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={handleLogout}
      >
        Sair
      </Button>
    </CommunityStyle>
  )
}
export default Comunidade
