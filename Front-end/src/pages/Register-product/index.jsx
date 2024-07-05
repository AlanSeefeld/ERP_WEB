import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button"
import Section from "../../components/Section"
import TitleInput from "../../components/TitleInput";
import Search from "../../components/Search";
import { ButtonRegister, Icon, Div, DivName, DivButtonEdit, DivButtonExcluir,DivSection, DivInput, DivButton, DivSearch, DivSearchImg, DivRadio, LabelRadio, InputRadio, SpanRadio, DivSectionInput, DivPai} from "./styles";
import { useEffect, useState } from "react";
import {back} from '../../config/config';

function RegisterProduct() {
   const [idProd,setId] = useState();
   const [estoque,setEstoque] = useState()
    const [tipo,setTipo] = useState('')
    const [nome,setNome] = useState('')
    const [custo,setCusto] = useState()
    const [preco,setPreco] = useState()
    const [com,setComissao] = useState()
    //const [est,setEstoque] = useState(0)
    const [pesquisa, setPesquisa] = useState('');
    const [produtos, setProd] = useState([]);
    const [editando,setEditando] = useState(false)

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
     }, []);

     const opcaoSelecionada = async (event) => {
        await setTipo(event.target.value);
     };
     //Função para registrar produto
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
           produtos.push(response.data.produto)
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
     //Função para pesquisar Produtos
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
     //Função para excluir Produto
     const excluirP = async (id) => {
      try{
         const response = await back.delete(`produto/${id}`)
         //console.log("deu")
         setProd(prevProd => prevProd.filter(prod => prod.id_prod !== id));
         alert("Produto excluido com sucesso!");
      }catch(e){
         alert("Falha ao excluir Produto");
      }
   }
   //Função para editar Produto
   const editarP = (id) =>{
      setEditando(true)
      const prod = produtos.filter(prod => prod.id_prod === id)
      //console.log(prod[0])
      setId(prod[0].id_prod)
      setEstoque(prod[0].estoque_prod)
      setTipo(prod[0].tp_prod);
      setNome(prod[0].nome_prod);
      setCusto(prod[0].custo_prod);
      setPreco(prod[0].preco_prod);
      setComissao(prod[0].comissao_prod);
      
   }
   //Função para cancelar edição
   const cancelarEditarP = () => {
      setEditando(false)
      setTipo("");
      setNome("");
      setCusto("");
      setPreco("");
      setComissao("");
   }
   //Função para salvar edição 
   const salvarEditarP = async () => {
      try{
         const response = await back.put(`produto/${idProd}`,{
            tipo: tipo,
            nome: nome,
            custo: custo,
            preco: preco,
            com: com,
            est: estoque
         })
         const produtosAtualizado = await back.get(`produto`);
         setProd(produtosAtualizado.data);
         alert("Produto Alterado com sucesso!");
         setTipo("");
         setNome("");
         setCusto("");
         setPreco("");
         setComissao("");
         setEditando(false)
      }catch(e){
         alert("erro para editar")
         console.log(e)
      }
      
   } 
    

    return (
        <DivPai>
            <Header />
            <DivSection>
                <Section>
                    <DivSearch>
                        <Search type="text" placeholder="Pesquisar Produto..." value={pesquisa} onChange={pesquisaP}></Search>
        
                    </DivSearch>
                    {produtos.map((valor, index) => (
                  <Div key={index} className="produto-item">
                     <DivName>
                        <TitleInput>{valor.id_prod} - {valor.nome_prod}</TitleInput>
                     </DivName>
                     <DivButtonEdit onClick={() => {editarP(valor.id_prod);}}>
                        <Icon
                           src="/src/assets/editar.png"
                        />
                     </DivButtonEdit>
                     {editando === false && (
                        <DivButtonExcluir onClick={() => {excluirP(valor.id_prod);}}>
                        <Icon
                           src="/src/assets/remover.png"
                        />
                        </DivButtonExcluir>
                     )}
                  </Div>
               ))}
            
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
                    {editando === false && (
                     <ButtonRegister onClick={registerP}>Cadastrar Novo</ButtonRegister>
                  )}
                  
                  {editando === true && (
                            <>
                                <ButtonRegister onClick={salvarEditarP}>Salvar</ButtonRegister>
                                <ButtonRegister onClick={cancelarEditarP}>Cancelar</ButtonRegister>
                            </>
                        )}
                    </DivButton>
                </Section>
            </DivSection>

        </DivPai>
    )
}
export default RegisterProduct;