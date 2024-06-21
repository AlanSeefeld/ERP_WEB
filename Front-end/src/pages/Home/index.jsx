import { Div,Img } from "./styles";
import Header from "../../components/Header";
import React from 'react';

function Home(){

    return(
        <Div>
            <Header></Header>
            <Img>
                <img src="./src/assets/logo.png" alt="" />
            </Img>
           
        </Div>
    )
}
export default Home;  