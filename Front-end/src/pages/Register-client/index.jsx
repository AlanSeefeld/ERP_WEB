import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivRadio, LabelRadio, InputRadio, SpanRadio, DivPai} from "./styles";
import {back} from '../../config/config';
import { useState } from "react";

function RegisterClient() {
   const [tipo,setTipo] = useState('')
   const [nome,setNome] = useState('')
   const [doc,setDoc] = useState('')
   const [tel,setTel] = useState('')

   
   const opcaoSelecionada = async (event) => {
      await setTipo(event.target.value);
     
  };
  function teste(){
   console.log(tipo)
  }

   const registerC = async () =>{
      const response = back.post(`cliente`,{
         tipo,
         nome,
         doc,
         tel
      })
   }
   return (
      <DivPai>
         <Header />
         <DivSection>
            <Section>
               <DivSearch>
                  <Search type="text" placeholder="Pesquisar Cliente...">Pesquisa de produto</Search>
                  <DivSearchImg>
                     <img src="/src/assets/lupa.png" />
                  </DivSearchImg>
               </DivSearch>

               <DivButton>
                  <Button>Cadastrar Novo</Button>
               </DivButton>
            </Section>

            <Section>

               <DivInput>
                  <DivRadio class="radio-inputs">
                     <LabelRadio class="radio">
                        <InputRadio type="radio" name="radioGroup" value="Físico"
                            checked={tipo === 'Físico'}
                            onChange={opcaoSelecionada}/>
                           <SpanRadio class="name" >Físico</SpanRadio>
                     </LabelRadio>
                     <LabelRadio class="radio">
                        <InputRadio type="radio" name="radioGroup"  value="Jurídico"
                            checked={tipo === 'Jurídico'}
                            onChange={opcaoSelecionada}/>
                           <SpanRadio class="name" >Jurídico</SpanRadio>
                     </LabelRadio>

                  </DivRadio>
               </DivInput>
               <DivInput>
                  <TitleInput>Nome </TitleInput>
                  <Input value={nome} onchane={e => setNome(e.target.value)}></Input>
               </DivInput>
               <DivInput>
                  <TitleInput>Documento </TitleInput>
                  <Input value={doc} onchane={e => setDoc(e.target.value)}></Input>
               </DivInput>
               <DivInput>
                  <TitleInput>Telefone </TitleInput>
                  <Input value={tel} onchane={e => setTel(e.target.value)}></Input>
               </DivInput>

               <DivButton>
                  <Button onclick={teste}>Salvar</Button>
               </DivButton>
            </Section>
         </DivSection>

      </DivPai>
   )
}
export default RegisterClient;