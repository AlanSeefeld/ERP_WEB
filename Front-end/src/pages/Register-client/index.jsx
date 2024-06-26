import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section";
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import {ButtonRegister, Icon, Div, DivName, DivButtonEdit, DivButtonExcluir, DivSection, DivInput, DivButton, DivSearch, DivRadio, LabelRadio, InputRadio, SpanRadio, DivPai } from "./styles";
import { back } from '../../config/config';
import { useState, useEffect } from "react";

function RegisterClient() {
   const [tipo, setTipo] = useState('');
   const [nome, setNome] = useState('');
   const [doc, setDoc] = useState('');
   const [tel, setTel] = useState('');
   const [pesquisa, setPesquisa] = useState('');
   const [clientes, setClientes] = useState([]);

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
   }, [clientes]);


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
                        <TitleInput>{valor.nome_cli}</TitleInput>
                     </DivName>
                     <DivButtonEdit>
                        <Icon
                           src="/src/assets/editar.png"
                        />
                     </DivButtonEdit>
                     <DivButtonExcluir>
                        <Icon
                           src="/src/assets/remover.png"
                        />
                     </DivButtonExcluir>
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
                  <ButtonRegister onClick={registerC}>Cadastrar Novo</ButtonRegister>
                  <ButtonRegister>Salvar</ButtonRegister>
               </DivButton>
            </Section>
         </DivSection>
      </DivPai>
   );
}

export default RegisterClient;
