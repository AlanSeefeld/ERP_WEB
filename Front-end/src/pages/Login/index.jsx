import {Title, MainLogin, Div, DivTitle, Divlogin, Img, DivMain, Input, Subtitle, Button} from './styles'

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
                            <Input></Input>
                         </Divlogin>

                         <Divlogin>
                            <Subtitle>Senha</Subtitle>
                            <Input></Input>
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