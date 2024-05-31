import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivRadio, LabelRadio, InputRadio, SpanRadio} from "./styles";

function RegisterClient() {
   return (
      <>
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
                        <InputRadio type="radio" name="radioGroup"/>
                           <SpanRadio class="name">Físico</SpanRadio>
                     </LabelRadio>
                     <LabelRadio class="radio">
                        <InputRadio type="radio" name="radioGroup"/>
                           <SpanRadio class="name">Jurídico</SpanRadio>
                     </LabelRadio>

                  </DivRadio>
               </DivInput>
               <DivInput>
                  <TitleInput>Nome </TitleInput>
                  <Input></Input>
               </DivInput>
               <DivInput>
                  <TitleInput>Documento </TitleInput>
                  <Input></Input>
               </DivInput>
               <DivInput>
                  <TitleInput>Telefone </TitleInput>
                  <Input></Input>
               </DivInput>

               <DivButton>
                  <Button>Salvar</Button>
               </DivButton>
            </Section>
         </DivSection>

      </>
   )
}
export default RegisterClient;