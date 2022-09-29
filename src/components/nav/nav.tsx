import { NavStyle, Hiperlink } from "./styles";
import Image from "next/image";
import logo from '../../../public/assets/images/P A L O M A.png';
import React, { useState } from 'react';
import { useEffect } from "react";

 const Nav: React.FC = () => {
  const [token,setToken] = useState("")

  useEffect(() => {
    // Perform localStorage action
    const tokenTmp = localStorage.getItem('token');
    setToken(tokenTmp);
  }, [])
    return (
      <NavStyle>
        <a href='/'>
          <Image src={logo} alt='logo de Paloma' height={75} width={75} />
        </a>
  
        <div>
          <Hiperlink href='#sobre mim'>Sobre mim</Hiperlink>
          <Hiperlink href='/projetos'>Projetos</Hiperlink>
          <Hiperlink href={token ? '/comunidade' : '/login'}>
            Acesse a comunidade
          </Hiperlink>
          <Hiperlink
            href='https://docs.google.com/document/d/1UTZL6MpGxkuoh8Z52xEc4wsaGBK9os8VFq17mBrxrNw/edit?usp=sharing'
            target='_blank'
          >
            Currículo vitae
          </Hiperlink>
        </div>
      </NavStyle>
    );
}
export default Nav