import styled from "styled-components"

export const Menu = styled.header`
    background:linear-gradient(to bottom, #ffc200,#F9DB5C);
    width: 14vh;
    height: 100%;
    top:0;
    left:0;
`
export const DivMenu = styled.button`
    width: 100%;
    height: 10%;
    border: none;
    cursor: pointer;
    background-color: transparent;

    img {
        width: 35px; 
        height: 35px; 
        transition: 0.3s;

        &:hover{
              width: 41px; 
             height: 41px; 

    }
    }
`
export const NameMenu = styled.h3`
    color: black;
    font-size: 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 100%;
    height: 20px;
`
