import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivSectionInput, DivPai } from "./styles";
import {useState} from 'react'
import {back} from '../../config/config';

function RegisterEmployee() {
    const cadastrarF = async() =>{
        
    }

    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Funcionário..."></Search>
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

                            <TitleInput>Nome </TitleInput>
                            <Input></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Senha </TitleInput>
                            <Input></Input>
                        </DivInput>
                    </DivSectionInput>


                    <DivButton>
                        <Button>Salvar</Button>
                    </DivButton>
                </Section>
            </DivSection>

        </DivPai>
    )
}
export default RegisterEmployee;