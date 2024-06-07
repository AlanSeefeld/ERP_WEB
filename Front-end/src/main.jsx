//Importação da tela de Login
import Login from './pages/Login'
import Home from './pages/Home'
import RegisterClient from './pages/Register-client'
import RegisterEmployee from './pages/Register-employee'
import RegisterProduct from './pages/Register-product'
import PageSales from './pages/Sales'
import Receber from './pages/Schedule'

import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <MyGlobalStyles/>
      <Receber/>
      </>
)
