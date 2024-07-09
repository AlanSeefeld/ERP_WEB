import styled from "styled-components";

export const SelectGlobal = styled.button`
  border: 4px solid yellow;
  width: 45vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
  appearance: none;
  padding: 0 10px;
  cursor: pointer;
  
 

  &:hover,
  &:focus {
    border-color: #ffc200;
  }
`;
