import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivRadio, LabelRadio, InputRadio, SpanRadio, DivSectionInput, DivPai} from "./styles";
import { useEffect, useState } from "react";
import {back} from '../../config/config';

function RegisterProduct() {
    const [tipo,setTipo] = useState('')
    const [nome,setNome] = useState('')
    const [custo,setCusto] = useState()
    const [preco,setPreco] = useState()
    const [com,setComissao] = useState()
    //const [est,setEstoque] = useState(0)
    const [pesquisa, setPesquisa] = useState('');
    const [produtos, setProd] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
           try {
              const response = await back.get(`produto`);
              setProd(response.data);
           } catch (error) {
              console.error('Erro ao carregar Produtos:', error);
           }
        };
  
        fetchProdutos();
     }, [produtos]);

     const opcaoSelecionada = async (event) => {
        await setTipo(event.target.value);
     };

     const registerP = async () => {
        try {
           const response = await back.post('produto', {
            tipo: tipo,
            nome: nome,
            custo: custo,
            preco: preco,
            com: com,
            est: 0
           });
           alert("Produto cadastrado com sucesso!");
           setTipo('');
           setNome('');
           setCusto('');
           setPreco('');
           setComissao('');
        } catch (error) {
           alert("Preencha todos os campos!",error);
        }
     };

     const pesquisaP = async (event) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
  
        try {
           const response = await back.get(`produto/${valorPesquisa}`);
           setProd(response.data);
           console.log(response.data)
           if(response.data.length <= 0){
              setProd([{ nome_prod: 'Nenhum Produto' }]);
           }
        } catch (error) {
           setProd([{ nome_prod: 'Nenhum Produto' }]);
        }
     };
    

    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Produto..." value={pesquisa} onChange={pesquisaP}></Search>
                        <DivSearchImg>
                            <img src="/src/assets/lupa.png" />
                        </DivSearchImg>
                    </DivSearch>
                    {produtos.map((valor, index) => ( 
                  <p key={index}>{valor.nome_prod}</p>
               ))}
                    <DivButton>
                        <Button>Cadastrar Novo</Button>
                    </DivButton>
                </Section>

                <Section>
                 <DivSectionInput>
                    <DivInput>
                        <DivRadio class="radio-inputs">
                            <LabelRadio class="radio">
                                <InputRadio type="radio" name="radioGroup" value="Produto"
                           checked={tipo === 'Produto'}
                           onChange={opcaoSelecionada} />
                                <SpanRadio class="name">Produto</SpanRadio>
                            </LabelRadio>
                            <LabelRadio class="radio">
                                <InputRadio type="radio" name="radioGroup" value="Servico"
                           checked={tipo === 'Servico'}
                           onChange={opcaoSelecionada} />
                                <SpanRadio class="name">Serviço</SpanRadio>
                            </LabelRadio>

                        </DivRadio>
                    </DivInput>
                        <DivInput>
                            <TitleInput>Nome </TitleInput>
                            <Input value={nome} onChange={e => setNome(e.target.value)}></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Custo Produto </TitleInput>
                            <Input type="number" value={custo} onChange={e => setCusto(e.target.value)}></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Preço de Venda </TitleInput>
                            <Input type="number" value={preco} onChange={e => setPreco(e.target.value)}></Input>
                        </DivInput>
                        <DivInput>
                            <TitleInput>Comissão (%) </TitleInput>
                            <Input type="number" value={com} onChange={e => setComissao(e.target.value)}></Input>
                        </DivInput>
                    </DivSectionInput>


                    <DivButton>
                        <Button  onClick={registerP}>Salvar</Button>
                    </DivButton>
                </Section>
            </DivSection>

        </DivPai>
    )
}
export default RegisterProduct;