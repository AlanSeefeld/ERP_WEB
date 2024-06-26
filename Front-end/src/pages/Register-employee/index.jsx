import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivSectionInput, DivPai } from "./styles";
import {useState,useEffect} from 'react'
import {back} from '../../config/config';

function RegisterEmployee() {
    const [nome,setNome] = useState('')
    const [senha,setSenha] = useState('')
    const [pesquisa, setPesquisa] = useState('');
    const [funcionarios, setFunc] = useState([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
           try {
              const response = await back.get(`funcionario`);
              setFunc(response.data);
           } catch (error) {
              console.error('Erro ao carregar Funcionários:', error);
           }
        };
  
        fetchFuncionarios();
     }, [funcionarios]);

     const registerF = async () => {
        try {
           const response = await back.post('funcionario', {
              nome: nome,
              senha: senha
           });
           alert("Funcionario cadastrado com sucesso!");
           setNome('');
           setSenha('');
        } catch (error) {
           alert("Preencha todos os campos!");
        }
     };

     const pesquisaF = async (event) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
  
        try {
           const response = await back.get(`funcionario/${valorPesquisa}`);
           setFunc(response.data);
           console.log(response.data)
           if(response.data.length <= 0){
              setFunc([{ nome_cli: 'Nenhum Funcionário' }]);
           }
        } catch (error) {
           setFunc([{ nome_cli: 'Nenhum Funcionário' }]);
        }
     };
  

    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Funcionário..." value={pesquisa} onChange={pesquisaF}></Search>
                        <DivSearchImg>
                            <img src="/src/assets/lupa.png" />
                        </DivSearchImg>
                    </DivSearch>
                    {funcionarios.map((valor, index) => ( 
                        <p key={index}>{valor.nome_func}</p>
                     ))}
                    <DivButton>
                        <Button>Cadastrar Novo</Button>
                    </DivButton>
                </Section>

                <Section>
                    <DivSectionInput>
                        <DivInput>

                            <TitleInput>Nome </TitleInput>
                            <Input value={nome} onChange={e => setNome(e.target.value)}></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Senha </TitleInput>
                            <Input type="password" value={senha} onChange={e => setSenha(e.target.value)}></Input>
                        </DivInput>
                    </DivSectionInput>


                    <DivButton>
                        <Button onClick={registerF}>Salvar</Button>
                    </DivButton>
                </Section>
            </DivSection>

        </DivPai>
    )
}
export default RegisterEmployee;