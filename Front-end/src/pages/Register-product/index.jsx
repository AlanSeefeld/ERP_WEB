import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivRadio, LabelRadio, InputRadio, SpanRadio, DivSectionInput } from "./styles";

function RegisterProduct() {
    return (
        <>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Produto..."></Search>
                        <DivSearchImg>
                            <img src="/src/assets/lupa.png" />
                        </DivSearchImg>
                    </DivSearch>

                    <DivButton>
                        <Button>Cadastrar Novo</Button>
                    </DivButton>
                </Section>

                <Section>
                <DivSectionInput>
                    <DivInput>
                        <DivRadio class="radio-inputs">
                            <LabelRadio class="radio">
                                <InputRadio type="radio" name="radioGroup" />
                                <SpanRadio class="name">Produto</SpanRadio>
                            </LabelRadio>
                            <LabelRadio class="radio">
                                <InputRadio type="radio" name="radioGroup" />
                                <SpanRadio class="name">Serviço</SpanRadio>
                            </LabelRadio>

                        </DivRadio>
                    </DivInput>
                        <DivInput>
                            <TitleInput>Nome </TitleInput>
                            <Input></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Custo Produto </TitleInput>
                            <Input></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Preço de Venda </TitleInput>
                            <Input></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Comissão (%) </TitleInput>
                            <Input></Input>
                        </DivInput>
                    </DivSectionInput>


                    <DivButton>
                        <Button>Salvar</Button>
                    </DivButton>
                </Section>
            </DivSection>

        </>
    )
}
export default RegisterProduct;