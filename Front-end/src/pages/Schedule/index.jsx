import Header from "../../components/Header";
import Section from "../../components/Section"
import Search from "../../components/Search";
import { DivSection, DivSearch, DivSearchImg, DivPai} from "./style";

function Receber() {
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
            </Section>

            <Section>

            </Section>
         </DivSection>

      </DivPai>
   )
}
export default Receber
;