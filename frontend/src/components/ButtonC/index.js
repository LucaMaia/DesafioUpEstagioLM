import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent() {

    function handlesubmit() {

    }

    return(
        <div>
            <div style={{padding:"20px"}}>
                <Button as="input" type="submit" value="Adicionar novo livro" />
            </div>

            <div style={{padding:"20px"}}>
                <a href="/Formulario">
                <Button as="input"  type="submit" variant="outline-primary" value="Ver lista de livros cadastrados" style={{margin:"20px"}}/>
                </a>
            </div>
        </div>
        )
}

export default ButtonComponent;