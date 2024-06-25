import {Title, MainLogin, Div, DivTitle, Divlogin, Img, DivMain, Input, Subtitle, Button} from './styles'
import React from 'react';
import {useState} from 'react'

function Login(){

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
                            placeholder='Digite seu usuário...'></Input>
                         </Divlogin>

                         <Divlogin>
                            <Subtitle>Senha</Subtitle>
                            <Input type="password"
                            placeholder='Digite sua senha...'></Input>
                         </Divlogin>
                            <Button>Entrar</Button>
                 </DivMain>
                    <Img>
                    </Img>
                    
            </MainLogin>
        </Div>
    )
}
export default Login;  