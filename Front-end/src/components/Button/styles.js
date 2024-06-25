import styled from "styled-components";

export const ButtonGlobal = styled.button`
  background: linear-gradient(to right, #f9db5c, #ffc200);
  color: black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 45vh;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  font-size: 25px;
  transition: font-size 0.3s;
  z-index: 9999;
  position: absolute;
  -webkit-box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);

  &:hover {
    background: linear-gradient(to right, #ffc200, #f9db5c);
    font-size: 30px;
  }
`;
