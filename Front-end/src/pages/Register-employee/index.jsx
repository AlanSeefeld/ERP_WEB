import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import {ButtonRegister, Icon, Div, DivName, DivButtonEdit, DivButtonExcluir,  DivSection, DivInput, DivButton, DivSearch, DivSectionInput, DivPai } from "./styles";
import {useState,useEffect} from 'react'
import {back} from '../../config/config';

function RegisterEmployee() {
   const [idFunci,setId] = useState();
    const [nome,setNome] = useState('')
    const [senha,setSenha] = useState('')
    const [pesquisa, setPesquisa] = useState('');
    const [funcionarios, setFunc] = useState([]);
    const [editando,setEditando] = useState(false)

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
     }, []);
     //Função para registrar Funcionario
     const registerF = async () => {
        try {
           const response = await back.post('funcionario', {
              nome: nome,
              senha: senha
           });
           //console.log(response.data.funcionario)
           funcionarios.push(response.data.funcionario)
           alert("Funcionario cadastrado com sucesso!");
           setNome('');
           setSenha('');
        } catch (error) {
           alert("Preencha todos os campos!");
        }
     };
     //Função para pesquisar funcionário
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
     //Função para excluir funcionário
     const excluirF = async (id) => {
      try{
         const response = await back.delete(`funcionario/${id}`)
         //console.log("deu")
         setFunc(prevFunc => prevFunc.filter(func => func.id_func !== id));
         alert("Funcionário excluido com sucesso!");
      }catch(e){
         alert("Falha ao excluir Funcionário");
      }
   }
   //Função para editar Funcionário
   const editarF = (id) =>{
      setEditando(true)
      const func = funcionarios.filter(func => func.id_func === id)
      //console.log(func[0])
      setId(func[0].id_func)
      setNome(func[0].nome_func)
      setSenha(func[0].senha_func)
      
   }
   //Função para cancelar edição
   const cancelarEditarF = () => {
      setEditando(false)
      setNome("")
      setSenha("")
   }
   //Função para salvar edição 
   const salvarEditarF = async () => {
      try{
         const response = await back.put(`funcionario/${idFunci}`,{
            nome: nome,
            senha: senha
         })
         const funcionariosAtualizado = await back.get(`funcionario`);
         setFunc(funcionariosAtualizado.data);
         alert("Funcionario Alterado com sucesso!");
         setNome("")
         setSenha("")
         setEditando(false)
      }catch(e){
         alert("erro para editar")
      }
      
   } 
  

    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Funcionário..." value={pesquisa} onChange={pesquisaF}></Search>
                    </DivSearch>
                    {funcionarios.map((valor, index) => (
                  <Div key={index} className="funcinario-item">
                     <DivName>
                        <TitleInput>{valor.id_func} - {valor.nome_func}</TitleInput>
                     </DivName>
                     <DivButtonEdit onClick={() => {editarF(valor.id_func);}}>
                        <Icon
                           src="/src/assets/editar.png"
                        />
                     </DivButtonEdit>
                     {editando === false && (
                        <DivButtonExcluir onClick={() => {excluirF(valor.id_func);}}>
                        <Icon
                           src="/src/assets/remover.png"
                        />
                        </DivButtonExcluir>
                     )}
                  </Div>
               ))}
       
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
                    {editando === false && (
                     <ButtonRegister onClick={registerF}>Cadastrar Novo</ButtonRegister>
                  )}
                  
                  {editando === true && (
                            <>
                                <ButtonRegister onClick={salvarEditarF}>Salvar</ButtonRegister>
                                <ButtonRegister onClick={cancelarEditarF}>Cancelar</ButtonRegister>
                            </>
                        )}
                    </DivButton>
                </Section>
            </DivSection>

        </DivPai>
    )
}
export default RegisterEmployee;