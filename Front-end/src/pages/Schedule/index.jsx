import { InputDateTime, DivTitleInfos2, DivAddServicos, DivInfos, DivServicos, DivInfosTitle, DivDate, InputDate, DivTitleInfos, DivTitleInfosPai, DivCriarNovaAgenda, SectionResult, DivMain, DivResult, Div, SectionInfos, DivPai } from "./style";
import Header from "../../components/Header";
import Button from "../../components/Button"
import TitleInput from "../../components/TitleInput"
import SelectsGlobal from "../../components/Select";
import OptionGlobal from "../../components/Options";

function Agenda() {

    return (
        <DivPai>
            <Header></Header>
            <Div>
                <DivMain>
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
                    <DivInfosTitle>

                        <TitleInput>Funcionário</TitleInput>
                        <SelectsGlobal>
                            <OptionGlobal>Funcionário 2</OptionGlobal>
                            <OptionGlobal>Funcionário 1</OptionGlobal>
                            <OptionGlobal>Funcionário 3</OptionGlobal>
                            <OptionGlobal>Funcionário 4</OptionGlobal>
                        </SelectsGlobal>
                    </DivInfosTitle>
                    <SectionInfos>
                        <DivTitleInfosPai>

                            <DivTitleInfos>
                                <TitleInput>Funcionário</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Cliente</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Hora</TitleInput>
                            </DivTitleInfos>

                        </DivTitleInfosPai>
                    </SectionInfos>
                </DivMain>

                <DivResult>
                    <DivCriarNovaAgenda>
                        <Button>Nova Agenda </Button>
                    </DivCriarNovaAgenda>

                    <SectionResult>
                        <DivInfos>
                            <DivAddServicos>
                                <DivInfosTitle>

                                    <TitleInput>Hora/Data</TitleInput>
                                    <InputDateTime type="datetime-local"></InputDateTime>

                                </DivInfosTitle>
                            </DivAddServicos>
                            <DivAddServicos>
                                <TitleInput>Cliente</TitleInput>
                                <SelectsGlobal>
                                    <OptionGlobal>Cliente 2</OptionGlobal>
                                    <OptionGlobal>Cliente 1</OptionGlobal>
                                    <OptionGlobal>Cliente 3</OptionGlobal>
                                    <OptionGlobal>Cliente 4</OptionGlobal>
                                </SelectsGlobal>
                            </DivAddServicos>
                            <DivAddServicos>
                                <TitleInput>Funcionário</TitleInput>
                                <SelectsGlobal>
                                    <OptionGlobal>Funcionário 2</OptionGlobal>
                                    <OptionGlobal>Funcionário 1</OptionGlobal>
                                    <OptionGlobal>Funcionário 3</OptionGlobal>
                                    <OptionGlobal>Funcionário 4</OptionGlobal>
                                </SelectsGlobal>
                            </DivAddServicos>
                            <DivAddServicos>
                                <TitleInput>Serviço</TitleInput>
                                <SelectsGlobal>
                                    <OptionGlobal>Serviço 2</OptionGlobal>
                                    <OptionGlobal>Serviço 1</OptionGlobal>
                                    <OptionGlobal>Serviço 3</OptionGlobal>
                                    <OptionGlobal>Serviço 4</OptionGlobal>
                                </SelectsGlobal>
                            </DivAddServicos>
                        </DivInfos>
                        <DivTitleInfos2>
                            <TitleInput>Serviços</TitleInput>
                        </DivTitleInfos2>
                        <DivServicos>
                            <Button>Salvar</Button>
                        </DivServicos>
                    </SectionResult>
                </DivResult>
            </Div>
        </DivPai>

    )
}
export default Agenda;  