//Importação da tela de Login
import Login from './pages/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <MyGlobalStyles/>
      <Login/>
      </>
)
