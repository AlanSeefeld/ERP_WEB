import {Title, MainLogin, Div, DivTitle, Divlogin, Img, DivMain, Input, Subtitle, Button} from './styles'
import React from 'react';
import {useState} from 'react'
import {back} from '../../config/config';
import { useNavigate } from "react-router-dom";


function Login(){
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const buscarLogin = async () => {
        try {
            const response = await back.get(`funcionarioL/${user}/${password}`);
            //console.log(response.data);
            if(response.data.length <= 0){
                alert("Nenhum usuario encontrado")
            }else{
                navigate("/");
            }
            
        } catch (error) {
            alert("Preencha todos os campos para fazer Login")
            //console.log("Deu erro:", error);
        }
    }
    

    return(
        <Div>
            <MainLogin>
                <DivMain>

                    <DivTitle>
                         <Title>FAÇA SEU LOGIN</Title>
                    </DivTitle>
                    
                        <Divlogin>
                            <Subtitle>Usuário</Subtitle>
                            <Input 
                            placeholder='Digite seu usuário...' value={user} onChange={e => setUser(e.target.value)}></Input>
                         </Divlogin>

                         <Divlogin>
                            <Subtitle>Senha</Subtitle>
                            <Input type="password"
                            placeholder='Digite sua senha...' value={password} onChange={e => setPassword(e.target.value)}></Input>
                         </Divlogin>
                            <Button onClick={buscarLogin}>Entrar</Button>
                 </DivMain>
                    <Img>
                    </Img>
                    
            </MainLogin>
        </Div>
    )
}
export default Login;  