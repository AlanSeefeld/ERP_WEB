import styled from "styled-components";

export const SelectGlobal = styled.select`
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
  
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="%23000" d="M2 0L0 2h4zM2 5L0 3h4z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;

  &:hover,
  &:focus {
    border-color: #ffc200;
  }
`;
