import styled from "styled-components";

export const DivSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;
export const DivPai = styled.div`
  display: flex;
 
`;

export const DivSearch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
`;
export const DivSearchImg = styled.div`
  width: 15%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    width: 18%;
    height: 48px;
  }
`;
