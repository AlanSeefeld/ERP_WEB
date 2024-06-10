import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
`;
export const DivMain = styled.div`
  width: 40%;
  height: 100vh;

  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const DivResult = styled.div`
  width: 60%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivClient = styled.div`
  width: 93%;
  height: 13vh;
  display: flex;
  flex-direction: column;
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
export const DivDelete = styled.div`
  width: 93%;
  height: 15vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DivPai = styled.div`
  display: flex;
`;
export const DivExcluirVenda = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
`;
export const InputExcluir = styled.input`
  border: 4px solid yellow;
  width: 20vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
`;

export const ButtonExcluir = styled.button`
  background-color: #ff0000;
  color: white;
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

  -webkit-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);

  &:hover {
    background: linear-gradient(to right, #ffc200, #f9db5c);
    font-size: 30px;
  }
`;

export const DivSectionInfos = styled.div`
  width: 93%;
  height: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DivSectionInfosVQD = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivInfos = styled.div`
  width: 30%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InputInfos = styled.input`
  border: 4px solid yellow;
  width: 22vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
`;
export const InputValores = styled.input`
  border: 4px solid yellow;
  width: 15vh;
  height: 40px;
  text-align: center;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  z-index: 9999;
`;

export const SectionResult = styled.div`
  border: none;
  width: 80%;
  height:70%;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;
  justify-content:flex-end;


  -webkit-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
`;

export const DivCancelarVenda = styled.div`
  width: 95%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DivSectionResul = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
`;

export const ButtonEncerrar = styled.button`
  background: linear-gradient(to right, #f9db5c, #ffc200);
  color: black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 25vh;
  height: 60px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  font-size: 25px;
  transition: font-size 0.3s;
  z-index: 9999;
  position: absolute;

  -webkit-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.51);

  &:hover {
    background: linear-gradient(to right, #ffc200, #f9db5c);
    font-size: 30px;
  }
`;

export const DivViewInfos = styled.div`
  width: 100%;
  height: 70%;
`;
export const DivTitleInfosPai = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
`;
export const DivTitleInfos = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid;
`;
