//Pasta criada para deixar os estilos globais que serão utilizados em todas as pages

import { createGlobalStyle } from 'styled-components';

 const MyGlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height:100%;
    }

`
export default MyGlobalStyles;