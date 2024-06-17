import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
`;
export const DivMain = styled.div`
  width: 60%;
  height: 100vh;

  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const DivResult = styled.div`
  width: 35%;
  height: 100%;

  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SectionInfos = styled.div`
  border: none;
  width: 75%;
  height: 60%;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  padding-top: 20px;
  justify-content: space-between;

  -webkit-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
`;
export const DivPai = styled.div`
  display: flex;
`;
export const SectionResult = styled.div`
  border: none;
  width: 95%;
  height: 90%;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;
  justify-content: flex-end;

  -webkit-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
`;

export const DivCriarNovaAgenda = styled.div`
  width: 95%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivTitleInfosPai = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: space-around;
`;
export const DivTitleInfos = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid;
`;
export const DivInfosTitle = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const DivDate = styled.div`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`;
export const InputDate = styled.input`
  border: 4px solid yellow;
  width: 30vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
`;
export const DivInfos = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DivServicos = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
export const DivAddServicos = styled.div`
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTitleInfos2 = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid;
  padding-left: 15px;
`;
export const InputDateTime = styled.input`
  border: 4px solid yellow;
  width: 40vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
`;
