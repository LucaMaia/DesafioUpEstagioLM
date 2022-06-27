import React, {useState} from "react";
import Input from "../../components/Input";
import ButtonC from "../../components/ButtonC";
import {Button} from "react-bootstrap";
import Logo from "../../assets/img/logo.jpg"
import ButtonComponent from "../../components/ButtonC";
import "./index.css"

//COMPONENTS

const Home = () => {
     return (
        <div className="menuMaior" >
            <img src={Logo}/>
            
            <div style={{ padding:"20px"}}>
                <h5 className="center">
                    Formulário de cadastro de Livros
                </h5>
                <p>Biblioteca Nacional de Brasília</p>
            </div>

            <div>
                <Input/>
            </div>

            <div >
                <ButtonComponent />
            </div>
        </div>
    )
}

export default Home;




