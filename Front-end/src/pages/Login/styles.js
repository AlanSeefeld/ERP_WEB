import styled from 'styled-components'

//Fazendo criação e estilização do componente Title 
export const Title = styled.h1`
    color:white;
    padding-top: 80px;
    font-weight:bold;
    margin-left: 30px;
`
export const DivMain = styled.div`
    height: 60vh;
    width: 50vh;
    
`
export const MainLogin = styled.main`
    background:linear-gradient(to right, black 65%, #FFFF 100%);
    width: 110vh;
    height: 60vh;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;

`
export const Img = styled.div`
    width: 50vh;
    height: 100%;
    border-radius: 25px;
`
export const Div = styled.div`
    background:linear-gradient(to right, #ffc200,#F9DB5C);
    justify-content: center;
    display: flex;
    flex: 1;
    align-items: center;

`
export const DivTitle = styled.div`
    width: 50vh;
    height: 50px;
    text-align: center;
    align-items: center;
`
export const Divlogin = styled.div`
    width: 60vh;
    height: 35px;
    margin-top: 85px;
    padding-top: 10px;

`
export const Input = styled.input`
    border: 3px solid yellow;
    width: 50vh;
    height: 40px;
    text-align: center;
    border-radius: 15px;
    margin-left: 30px;
    outline: none;
    background-color: black;
    color: white;
    font-size: 20px;
    position: fixed;
`
export const Subtitle = styled.h3`
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 35px;
`
export const Button = styled.button`
    background:linear-gradient(to right, #F9DB5C,#ffc200);
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 50vh;
    height: 40px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    margin-left: 30px;
    margin-top: 80px;
    font-size: 30px;
    transition: font-size 0.3s;
    
    &:hover{
    background:linear-gradient(to right, #ffc200,#F9DB5C);
    font-size: 35px;

    }
`
