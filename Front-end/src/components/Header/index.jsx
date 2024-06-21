import { Menu, DivMenu, NameMenu } from "./styles";
import { Link } from "react-router-dom";
import React from 'react';

function Header() {
    return (
        <Menu>
            <DivMenu>
                <Link to="/Home">
                    <img src="/src/assets/casa.png" alt="Home" />
                </Link>
                <NameMenu>Home</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/RegistroFornecedor">
                    <img src="/src/assets/funcionarios.png" alt="Funcionários" />
                </Link>
                <NameMenu>Funcionários</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/RegistroCliente">
                    <img src="/src/assets/user.png" alt="Clientes" />
                </Link>
                <NameMenu>Clientes</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/RegistroProduto">
                    <img src="/src/assets/dolar.png" alt="Produtos" />
                </Link>
                <NameMenu>Produtos</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Vendas">
                    <img src="/src/assets/dinheiro.png" alt="Vendas" />
                </Link>
                <NameMenu>Vendas</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Receber">
                    <img src="/src/assets/dinheiro.png" alt="Receber" />
                </Link>
                <NameMenu>Receber</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Compra">
                    <img src="/src/assets/carrinho.png" alt="Compras" />
                </Link>
                <NameMenu>Compras</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Agenda">
                    <img src="/src/assets/calendario.png" alt="Agenda" />
                </Link>
                <NameMenu>Agenda</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Relatorio">
                    <img src="/src/assets/relatorio.png" alt="Relatórios" />
                </Link>
                <NameMenu>Relatórios</NameMenu>
            </DivMenu>
            <DivMenu>
                <Link to="/Login">
                    <img src="/src/assets/sair.png" alt="Sair" />
                </Link>
                <NameMenu>Sair</NameMenu>
            </DivMenu>
        </Menu>
    );
}

export default Header;
