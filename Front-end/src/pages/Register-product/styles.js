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
  height: 150px;
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
export const DivRadio = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #eee;
  box-sizing: border-box;
  padding: 0.25rem;
  width: 50%;
  height: 40px;
  font-size: 14px;
  -webkit-box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.61);
  background-color: #ffc200;

`;

export const LabelRadio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`;
export const InputRadio = styled.input`
  display: none;

  &:checked + span {
    background-color: #F9DB5C;
    font-weight: 600;
  }

`;
export const SpanRadio = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all 0.15s ease-in-out;
`;
export const DivSectionInput = styled.div`
  width: 100%;
  height: 80%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
