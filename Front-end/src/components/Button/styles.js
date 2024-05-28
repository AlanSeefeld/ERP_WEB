import styled from "styled-components"

export const ButtonGlobal = styled.button`
    background:linear-gradient(to right, #F9DB5C,#ffc200);
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 45vh;
    height: 40px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    font-size: 30px;
    transition: font-size 0.3s;
    z-index: 9999;
    position: absolute;
    
    &:hover{
    background:linear-gradient(to right, #ffc200,#F9DB5C);
    font-size: 35px;

    }
`