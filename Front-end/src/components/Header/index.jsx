import { Menu, DivMenu, NameMenu, } from "./styles";

function Header(){

    return(
       <>
        <Menu>
            <DivMenu >
                  <img src="/src/assets/casa.png"/>
                <NameMenu>Home</NameMenu>
            </DivMenu>
            <DivMenu >
                  <img src="/src/assets/funcionarios.png"/>
                <NameMenu>Funcionários</NameMenu>
            </DivMenu>
            <DivMenu >
                  <img src="/src/assets/user.png"/>
                <NameMenu>Clientes</NameMenu>
            </DivMenu>
            <DivMenu >
                  <img src="/src/assets/dolar.png"/>
                <NameMenu>Produtos</NameMenu>
            </DivMenu>
            <DivMenu >
                 <img src="/src/assets/dinheiro.png"/>
                <NameMenu>Vendas</NameMenu>
            </DivMenu>
            <DivMenu >
                 <img src="/src/assets/dinheiro.png"/>
                <NameMenu>Receber</NameMenu>
            </DivMenu>
            <DivMenu >
                <img src="/src/assets/carrinho.png"/>
                <NameMenu>Compras</NameMenu>
            </DivMenu>
            <DivMenu >
                  <img src="/src/assets/calendario.png"/>
                <NameMenu>Agenda</NameMenu>
            </DivMenu>
            <DivMenu >
                  <img src="/src/assets/relatorio.png"/>
                <NameMenu>Relatórios</NameMenu>
            </DivMenu>
            <DivMenu >
                <img src="/src/assets/sair.png"/>
                  <NameMenu>Sair</NameMenu>
            </DivMenu>
           
        </Menu>
       </>
    )
}
export default Header;  