import { DivTitleInfos, DivTitleInfosPai, DivViewInfos, InputValores, ButtonEncerrar, DivSectionResul, DivCancelarVenda, SectionResult, InputInfos, DivSectionInfosVQD, DivInfos, DivSectionInfos, ButtonExcluir, DivMain, DivResult, Div, DivClient, SectionInfos, DivDelete, DivPai, DivExcluirVenda, InputExcluir } from "./style";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput"

function PageCompra() {

    return (
        <DivPai>
            <Header></Header>
            <Div>


                <DivMain>
                    <DivClient>
                        <TitleInput>Fornecedor</TitleInput>
                        <Input />
                    </DivClient>

                    <SectionInfos>
                        <DivSectionInfos>
                            <TitleInput>Produto</TitleInput>
                            <Input />
                        </DivSectionInfos>
                        <DivSectionInfosVQD>
                            <DivInfos>
                                <TitleInput>Preço</TitleInput>
                                <InputValores />
                            </DivInfos>
                            <DivInfos>
                                <TitleInput>Qntd</TitleInput>
                                <InputValores />
                            </DivInfos>
                        </DivSectionInfosVQD>
                        <DivSectionInfos>
                            <Button>Salvar</Button>
                        </DivSectionInfos>
                    </SectionInfos>

                    <DivDelete>
                        <DivExcluirVenda>
                            <TitleInput>Excluir Compra N°</TitleInput>
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
                        <Button>Cancelar Compra</Button>
                    </DivCancelarVenda>
                    <SectionResult>
                        <DivTitleInfosPai>
                            <DivTitleInfos>
                                <TitleInput>Produto</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Qntd</TitleInput>
                            </DivTitleInfos>
                            <DivTitleInfos>
                                <TitleInput>Preço Uni</TitleInput>
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
export default PageCompra;  