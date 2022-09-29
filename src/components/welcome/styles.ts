import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const MainText = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 150px;
    width: 50vw;
 button{
    background-color: #D1A8A6;
    color: #063640; 
    border-radius: 20px;
    box-shadow: 1px 1px 6px 0px #063640;
    text-decoration-line: none;
    cursor: pointer;
    text-align:center;
button :hover{
    background-color:#063640;
    color: #D1A8A6;
}
`
