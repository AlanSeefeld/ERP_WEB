import styled from "styled-components";

export const DivSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 50px;
  align-items: center;
`;

export const DivInput = styled.div`
  width: 100%;
  height: 85px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivButton = styled.div`
  width: 100%;
  height: 20%;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
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
export const DivSectionInput = styled.div`
  width: 100%;
  height: 80%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
