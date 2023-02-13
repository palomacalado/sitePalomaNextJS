import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* background: ${props => props.theme.colors.background}; */
    background-image: radial-gradient(circle, #f0e7e2, #98737b);
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
  h1 {
    font-family: 'Vidaloka', serif;
}
`