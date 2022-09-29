import React from 'react';
import { ContactStyle, Hiperlink ,  } from './styles';
import {
    WhatsAppOutlined,
    GithubOutlined,
    InstagramOutlined,
    YoutubeOutlined,
  } from "@ant-design/icons";
  
const Contact:React.FC = () =>{
    return (
        <ContactStyle>
          <Hiperlink
            href="https://wa.me/5521996486265?text=Olá! Vim pelo site."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppOutlined /> Fale pelo whatsapp
          </Hiperlink>
    
          <div>
            <Hiperlink
              href="https://github.com/palomacalado"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </Hiperlink>
            <Hiperlink
              href="https://www.instagram.com/palomacallado/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined />
            </Hiperlink>
            <Hiperlink
              href="https://www.youtube.com/channel/UCUXwr2MEgjIoA5qAA9YqbNg"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeOutlined />
            </Hiperlink>
          </div>
        </ContactStyle>
      );
}
export default Contact;