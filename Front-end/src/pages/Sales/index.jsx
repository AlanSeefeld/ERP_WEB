import { DivName,DivSearch,Search,DivTitleInfos, DivTitleInfosPai, DivViewInfos, InputValores, ButtonEncerrar, DivSectionResul, DivCancelarVenda, SectionResult, InputInfos, DivSectionInfosVQD, DivInfos, DivSectionInfos, ButtonExcluir, DivMain, DivResult, Div, DivClient, SectionInfos, DivDelete, DivPai, DivExcluirVenda, InputExcluir } from "./style";
import Header from "../../components/Header";
import Button from "../../components/Button"
import TitleInput from "../../components/TitleInput"
import SelectsGlobal from "../../components/Select";
import OptionGlobal from "../../components/Options";
import {back} from '../../config/config';
import { useEffect, useState } from "react";


function PageSales() {
    const [clientes, setClientes] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const [pesquisa, setPesquisa] = useState("");
    const [pesquisando,setPesquisando] = useState(false)
    const [pesquisaCliente,setPesquisaCliente] = useState(false)
    const [pesquisaFuncionario,setPesquisaFuncionario] = useState(false)
    const [pesquisaProduto,setPesquisaProduto] = useState(false)

    const [cliente,setCliente] = useState([])
    const [funcionario,setFunc] = useState([])
    const [produto,setProd] = useState([])

    const [valor,setValor] = useState()
    const [qntd,setQntd] = useState()
    const [desc,setDesc] = useState()

    const [listaProdutos,setLista] = useState([])

    

    const pesquisarC = async () => {
        setPesquisando(true)
        setPesquisaFuncionario(false)
        setPesquisaProduto(false)
        setPesquisaCliente(true)
        setPesquisa("")
        
        const response = await back.get(`cliente`);
        setClientes(response.data);
    }

    const pesquisarF = async () => {
        setPesquisando(true)
        setPesquisaFuncionario(true)
        setPesquisaCliente(false)
        setPesquisaProduto(false)
        setPesquisa("")

        const response = await back.get(`funcionario`);
        setFuncionarios(response.data);
    }

    const pesquisarP = async () => {
        setPesquisando(true)
        setPesquisaProduto(true)
        setPesquisaFuncionario(false)
        setPesquisaCliente(false)
        setPesquisa("")

        const response = await back.get(`produto`);
        setProdutos(response.data);
    }

    const cancelarPesquisa = () => {
        setPesquisando(false)   
    }



       //Função criada para fazer a busca pelo search dos clientes criados
   const pesquisaC = async (event) => {
    const valorPesquisa = event.target.value;
    setPesquisa(valorPesquisa);

    try {
       const response = await back.get(`cliente/${valorPesquisa}`);
       setClientes(response.data);
       //console.log(response.data)
       if (response.data.length <= 0) {
          setClientes([{ nome_cli: 'Nenhum Cliente' }]);
       }
    } catch (error) {
       setClientes([{ nome_cli: 'Nenhum Cliente' }]);
    }
 };

    const selecionaC = (id) => {
        const cli = clientes.filter(cli => cli.id_cli === id)
        setCliente(cli[0])
        setPesquisando(false)
        setPesquisaCliente(false)
    }

    //Função para pesquisar funcionário
    const pesquisaF = async (event) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
  
        try {
           const response = await back.get(`funcionario/${valorPesquisa}`);
           setFuncionarios(response.data);
           
           if(response.data.length <= 0){
            setFuncionarios([{ nome_cli: 'Nenhum Funcionário' }]);
           }
        } catch (error) {
            setFuncionarios([{ nome_cli: 'Nenhum Funcionário' }]);
        }
     };

     const selecionaF = (id) => {
        const func = funcionarios.filter(func => func.id_func === id)
        setFunc(func[0])
        setPesquisando(false)
        setPesquisaFuncionario(false)
    }

    //Função para pesquisar Produtos
    const pesquisaP = async (event) => {
        const valorPesquisa = event.target.value;
        setPesquisa(valorPesquisa);
  
        try {
           const response = await back.get(`produto/${valorPesquisa}`);
           setProdutos(response.data);
           
           if(response.data.length <= 0){
            setProdutos([{ nome_prod: 'Nenhum Produto' }]);
           }
        } catch (error) {
            setProdutos([{ nome_prod: 'Nenhum Produto' }]);
        }
     };

     const selecionaP = (id) => {
        const prod = produtos.filter(prod => prod.id_prod === id)
        setProd(prod[0])
        setValor(prod[0].preco_prod)
        setQntd(1)
        setDesc(0)
        setPesquisando(false)
        setPesquisaProduto(false)
    }

    const salvarProduto = () => {
        //alert(1)
        if(funcionario.length <= 0 ||produto.length <= 0 || valor === "" || qntd === ""){
            alert("Algum campo vazio")
        }else{
            
        }
    }
    
 
    return (
        <DivPai>
            <Header></Header>
            <Div>


                <DivMain>
                    <DivClient>
                        <TitleInput>Cliente</TitleInput>
                        <SelectsGlobal onClick={() => pesquisarC()}>{cliente.nome_cli}</SelectsGlobal>
                    </DivClient>

                        <SectionInfos>
                            {
                        pesquisando === true? 
                        <>
                        
                        {pesquisaCliente === true && (
                            <>
                            <DivSearch>
                                <Search type="text" placeholder="Pesquisar Cliente..." value={pesquisa} onChange={pesquisaC}></Search>
                            </DivSearch>
                            {clientes.map(valor => (
                                
                                <DivName onClick={() => selecionaC(valor.id_cli)}>
                                    <TitleInput id={valor.id_cli}>{valor.id_cli} - {valor.nome_cli}</TitleInput>
                                </DivName>
                                
    
                            ))}
                            </>
                        )}

                        {
                            pesquisaFuncionario === true && (
                                <>
                                <DivSearch>
                                    <Search type="text" placeholder="Pesquisar Funcionário..." value={pesquisa} onChange={pesquisaF}></Search>
                                </DivSearch>
                                    {funcionarios.map(valor => (
                                        
                                        <DivName onClick={() => selecionaF(valor.id_func)}>
                                            <TitleInput id={valor.id_func}>{valor.id_func} - {valor.nome_func}</TitleInput>
                                        </DivName>
                            ))}
                                </>
                            )
                        }

{
                            pesquisaProduto === true && (
                                <>
                                    <DivSearch>
                                        <Search type="text" placeholder="Pesquisar Produto..." value={pesquisa} onChange={pesquisaP}></Search>
                                    </DivSearch>
                                    {produtos.map(valor => (
                                        
                                        <DivName onClick={() => selecionaP(valor.id_prod)}>
                                            <TitleInput id={valor.id_prod}>{valor.id_prod} - {valor.nome_prod}</TitleInput>
                                        </DivName>
                            ))}
                                </>
                            )
                        }
                        
                        <DivSectionInfos>
                            <Button onClick={() => cancelarPesquisa()}>Cancelar</Button>
                        </DivSectionInfos>
                        </>
                        :
                        <>
                            <DivSectionInfos>
                                <TitleInput>Funcionário</TitleInput>
                                <SelectsGlobal onClick={() => pesquisarF()}>
                                   {funcionario.nome_func}
                                </SelectsGlobal>
                            </DivSectionInfos>
                            <DivSectionInfos>
                                <TitleInput>Produto</TitleInput>
                                <SelectsGlobal onClick={() => pesquisarP()}>
                                   {produto.nome_prod}
                                </SelectsGlobal>
                            </DivSectionInfos>
                            <DivSectionInfosVQD>
                                <DivInfos>
                                    <TitleInput>Valor</TitleInput>
                                    <InputValores type={"number"} value={valor} onChange={(event) => setValor(event.target.value)} />
                                </DivInfos>
                                <DivInfos>
                                    <TitleInput>Qntd</TitleInput>
                                    <InputValores type={"number"} value={qntd} onChange={(event) => setQntd(event.target.value)}/>
                                </DivInfos>
                                <DivInfos>
                                    <TitleInput>Desconto</TitleInput>
                                    <InputValores type={"number"} value={desc} onChange={(event) => setDesc(event.target.value)}/>
                                </DivInfos>
                            </DivSectionInfosVQD>
                            <DivSectionInfos>
                                <Button onClick={salvarProduto}>Salvar</Button>
                            </DivSectionInfos>
                        </>
                        }
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