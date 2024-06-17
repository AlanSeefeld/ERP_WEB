import { DivTitleInfos, DivTitleInfosPai, DivViewInfos, InputValores, ButtonEncerrar, DivSectionResul, DivCancelarVenda, SectionResult, InputInfos, DivSectionInfosVQD, DivInfos, DivSectionInfos, ButtonExcluir, DivMain, DivResult, Div, DivClient, SectionInfos, DivDelete, DivPai, DivExcluirVenda, InputExcluir } from "./style";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import TitleInput from "../../components/TitleInput"
import SelectsGlobal from "../../components/Select";
import OptionGlobal from "../../components/Options";

function PageSales() {

    return (
        <DivPai>
            <Header></Header>
            <Div>


                <DivMain>
                    <DivClient>
                        <TitleInput>Cliente</TitleInput>
                        <SelectsGlobal>
                                <OptionGlobal>Cliente 2</OptionGlobal>
                                <OptionGlobal>Cliente 1</OptionGlobal>
                                <OptionGlobal>Cliente 3</OptionGlobal>
                                <OptionGlobal>Cliente 4</OptionGlobal>
                            </SelectsGlobal>
                    </DivClient>

                    <SectionInfos>
                        <DivSectionInfos>
                            <TitleInput>Funcionário</TitleInput>
                            <SelectsGlobal>
                                <OptionGlobal>Funcionário 2</OptionGlobal>
                                <OptionGlobal>Funcionário 1</OptionGlobal>
                                <OptionGlobal>Funcionário 3</OptionGlobal>
                                <OptionGlobal>Funcionário 4</OptionGlobal>
                            </SelectsGlobal>
                        </DivSectionInfos>
                        <DivSectionInfos>
                            <TitleInput>Produto</TitleInput>
                            <SelectsGlobal>
                                <OptionGlobal>Produto 2</OptionGlobal>
                                <OptionGlobal>Produto 1</OptionGlobal>
                                <OptionGlobal>Produto 3</OptionGlobal>
                                <OptionGlobal>Produto 4</OptionGlobal>
                            </SelectsGlobal>
                        </DivSectionInfos>
                        <DivSectionInfosVQD>
                            <DivInfos>
                                <TitleInput>Valor</TitleInput>
                                <InputValores />
                            </DivInfos>
                            <DivInfos>
                                <TitleInput>Qntd</TitleInput>
                                <InputValores />
                            </DivInfos>
                            <DivInfos>
                                <TitleInput>Desconto</TitleInput>
                                <InputValores />
                            </DivInfos>
                        </DivSectionInfosVQD>
                        <DivSectionInfos>
                            <Button>Salvar</Button>
                        </DivSectionInfos>
                    </SectionInfos>

                    <DivDelete>
                        <DivExcluirVenda>
                            <TitleInput>Excluir Venda N°</TitleInput>
                            <InputExcluir />
                        </DivExcluirVenda>
                        <DivExcluirVenda>
                            <ButtonExcluir>
                                Excluir
                            </ButtonExcluir>
                        </DivExcluirVenda>
                    </DivDelete>
                </DivMain>

                <DivResult>
                    <DivCancelarVenda>
                        <Button>Cancelar Venda</Button>
                    </DivCancelarVenda>
                    <SectionResult>
                        <DivTitleInfosPai>
                            <DivTitleInfos>
                                <TitleInput>Func</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Produto</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Qntd</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Desc</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Total</TitleInput>
                            </DivTitleInfos>
                        </DivTitleInfosPai>
                        <DivViewInfos>

                        </DivViewInfos>
                        <DivSectionResul>
                            <DivInfos>
                                <TitleInput>Itens</TitleInput>
                                <InputInfos />
                            </DivInfos>
                            <DivInfos>
                                <TitleInput>Desconto</TitleInput>
                                <InputInfos />
                            </DivInfos>
                            <DivInfos>
                                <TitleInput>SubTotal</TitleInput>
                                <InputInfos />
                            </DivInfos>
                            <DivInfos>
                                <ButtonEncerrar>Encerra</ButtonEncerrar>
                            </DivInfos>
                        </DivSectionResul>
                    </SectionResult>
                </DivResult>
            </Div>
        </DivPai>

    )
}
export default PageSales;  