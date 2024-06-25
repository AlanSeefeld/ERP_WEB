import Header from "../../components/Header";
import SelectsGlobal from "../../components/Select";
import OptionGlobal from "../../components/Options";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import { DivTitleInfos, DivSection2, DivDate, InputDate, DivInfosTitle, DivSection, DivInput, DivButton, DivPai } from "./style";

function Relatorios() {
    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivTitleInfos>
                        <TitleInput>Relatórios</TitleInput>
                    </DivTitleInfos>
                </Section>

                <Section>
                    <DivInput>
                        <DivDate>
                            <DivInfosTitle>
                                <TitleInput>Data Inicial</TitleInput>
                                <InputDate type="date"></InputDate>
                            </DivInfosTitle>
                            <DivInfosTitle>
                                <TitleInput>Data Final</TitleInput>
                                <InputDate type="date"></InputDate>
                            </DivInfosTitle>
                        </DivDate>
                    </DivInput>
                    <DivSection2>
                        <TitleInput>Funcionário</TitleInput>
                        <SelectsGlobal>
                            <OptionGlobal>Todos</OptionGlobal>
                            <OptionGlobal>Funcionário 1</OptionGlobal>
                            <OptionGlobal>Funcionário 3</OptionGlobal>
                            <OptionGlobal>Funcionário 4</OptionGlobal>
                        </SelectsGlobal>
                    </DivSection2>
                    <DivButton>
                        <Button>Visualizar</Button>
                    </DivButton>
                </Section>
            </DivSection>
        </DivPai>
    )
}
export default Relatorios;