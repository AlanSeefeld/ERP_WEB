import { Menu, DivMenu, NameMenu, } from "./styles";

function Header(){

    return(
       <>
        <Menu>
            <DivMenu >
                <NameMenu>Home</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Funcionários</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Clientes</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Produtos</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Vendas</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Receber</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Compras</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Agenda</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Relatórios</NameMenu>
            </DivMenu>
            <DivMenu >
                <NameMenu>Sair</NameMenu>
            </DivMenu>
           
        </Menu>
       </>
    )
}
export default Header;  