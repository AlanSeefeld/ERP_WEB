import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles'; // Estilos globais
import App from './app'; // O componente principal contendo as rotas e estrutura
import Header from './components/Header';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GlobalStyle/>
        <App />
    </BrowserRouter>
);
