import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterClient from './pages/Register-client';
import RegisterEmployee from './pages/Register-employee';
import RegisterProduct from './pages/Register-product';
import PageSales from './pages/Sales';
import Receber from './pages/Schedule';
import PageCompra from './pages/Purchase';
import Agenda from './pages/Schedule';
import Relatorios from './pages/Reports';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/RegistroCliente" element={<RegisterClient />} />
                <Route path="/RegistroFornecedor" element={<RegisterEmployee />} />
                <Route path="/RegistroProduto" element={<RegisterProduct />} />
                <Route path="/Vendas" element={<PageSales />} />
                <Route path="/Receber" element={<Receber />} />
                <Route path="/Compra" element={<PageCompra />} />
                <Route path="/Agenda" element={<Agenda />} />
                <Route path="/Relatorio" element={<Relatorios />} />
            </Routes>
        </>
    );
}

export default App;
