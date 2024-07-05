import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section";
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import {ButtonRegister, Icon, Div, DivName, DivButtonEdit, DivButtonExcluir, DivSection, DivInput, DivButton, DivSearch, DivRadio, LabelRadio, InputRadio, SpanRadio, DivPai } from "./styles";
import { back } from '../../config/config';
import { useState, useEffect } from "react";

function RegisterClient() {
   const [idCliente,setId] = useState();
   const [tipo, setTipo] = useState('');
   const [nome, setNome] = useState('');
   const [doc, setDoc] = useState('');
   const [tel, setTel] = useState('');
   const [pesquisa, setPesquisa] = useState('');
   const [clientes, setClientes] = useState([]);
   const [editando,setEditando] = useState(false)

   useEffect(() => {
      const fetchClientes = async () => {
         try {
            const response = await back.get(`cliente`);
            setClientes(response.data);
         } catch (error) {
            console.error('Erro ao carregar clientes:', error);
         }
      };

      fetchClientes();
   }, []);


   const opcaoSelecionada = async (event) => {
      await setTipo(event.target.value);
   };

   //Função criada para registar o cliente criado ao clicar no botão
   const registerC = async () => {
      
      try {
         const response = await back.post('cliente', {
            tipo: tipo,
            nome: nome,
            doc: doc,
            tel: tel
         });
         //console.log(response.data.cliente)
         clientes.push(response.data.cliente)
         alert("Cliente cadastrado com sucesso!");
         setTipo('');
         setNome('');
         setDoc('');
         setTel('');
      } catch (error) {
         alert("Preencha todos os campos!");
      }
   };

   //Função criada para fazer a busca pelo search dos clientes criados
   const pesquisaC = async (event) => {
      const valorPesquisa = event.target.value;
      setPesquisa(valorPesquisa);

      try {
         const response = await back.get(`cliente/${valorPesquisa}`);
         setClientes(response.data);
         console.log(response.data)
         if (response.data.length <= 0) {
            setClientes([{ nome_cli: 'Nenhum Cliente' }]);
         }
      } catch (error) {
         setClientes([{ nome_cli: 'Nenhum Cliente' }]);
      }
   };
   //Função para excluir cliente
   const excluirC = async (id) => {
      try{
         const response = await back.delete(`cliente/${id}`)
         //console.log("deu")
         setClientes(prevClientes => prevClientes.filter(cliente => cliente.id_cli !== id));
         alert("Cliente excluido com sucesso!");
      }catch(e){
         alert("Falha ao excluir cliente");
      }
   }
   //Função para editar cliente
   const editarC = (id) =>{
      setEditando(true)
      const cli = clientes.filter(cli => cli.id_cli === id)
      //console.log(cli[0])  
      setId(cli[0].id_cli)
      setTipo(cli[0].tp_cli)
      setNome(cli[0].nome_cli)
      setDoc(cli[0].doc_cli)
      setTel(cli[0].tel_cli)
   }
   //Função para cancelar edição
   const cancelarEditarC = () => {
      setEditando(false)
      setTipo('');
      setNome('');
      setDoc('');
      setTel('');
   }
   //Função para salvar Edição
   const salvarEditarC = async () => {
      try{
         const response = await back.put(`cliente/${idCliente}`,{
            tipo: tipo,
            nome: nome,
            doc: doc,
            tel: tel
         })
         const clientesAtualizado = await back.get(`cliente`);
         setClientes(clientesAtualizado.data);
         alert("Cliente Alterado com sucesso!");
         setTipo('');
         setNome('');
         setDoc('');
         setTel('');
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
                  <Search type="text" placeholder="Pesquisar Cliente..." value={pesquisa} onChange={pesquisaC}></Search>
               </DivSearch>

               {clientes.map((valor, index) => (
                  <Div key={index} className="cliente-item">
                     <DivName>
                        <TitleInput id={valor.id_cli}>{valor.id_cli} - {valor.nome_cli}</TitleInput>
                     </DivName>
                     <DivButtonEdit onClick={() => {editarC(valor.id_cli);}}>
                        <Icon
                           src="/src/assets/editar.png"
                        />
                     </DivButtonEdit>
                     {editando === false && (
                        <DivButtonExcluir onClick={() => {excluirC(valor.id_cli);}}>
                        <Icon
                           src="/src/assets/remover.png"
                        />
                        </DivButtonExcluir>
                     )}
                     
                  </Div>
               ))}
            </Section>

            <Section>
               <DivInput>
                  <DivRadio className="radio-inputs">
                     <LabelRadio className="radio">
                        <InputRadio type="radio" name="radioGroup" value="Físico"
                           checked={tipo === 'Físico'}
                           onChange={opcaoSelecionada} />
                        <SpanRadio className="name" >Físico</SpanRadio>
                     </LabelRadio>
                     <LabelRadio className="radio">
                        <InputRadio type="radio" name="radioGroup" value="Jurídico"
                           checked={tipo === 'Jurídico'}
                           onChange={opcaoSelecionada} />
                        <SpanRadio className="name" >Jurídico</SpanRadio>
                     </LabelRadio>
                  </DivRadio>
               </DivInput>
               <DivInput>
                  <TitleInput>Nome</TitleInput>
                  <Input value={nome} onChange={e => setNome(e.target.value)} />
               </DivInput>
               <DivInput>
                  <TitleInput>Documento</TitleInput>
                  <Input value={doc} onChange={e => setDoc(e.target.value)} />
               </DivInput>
               <DivInput>
                  <TitleInput>Telefone</TitleInput>
                  <Input value={tel} onChange={e => setTel(e.target.value)} />
               </DivInput>

               <DivButton>
                  {editando === false && (
                     <ButtonRegister onClick={registerC}>Cadastrar Novo</ButtonRegister>
                  )}
                  
                  {editando === true && (
                            <>
                                <ButtonRegister onClick={salvarEditarC}>Salvar</ButtonRegister>
                                <ButtonRegister onClick={cancelarEditarC}>Cancelar</ButtonRegister>
                            </>
                        )}
               </DivButton>
            </Section>
         </DivSection>
      </DivPai>
   );
}

export default RegisterClient;
