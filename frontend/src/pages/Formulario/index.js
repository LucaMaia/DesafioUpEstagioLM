import React from 'react'
import './index.css';
import {Button,ListGroup} from 'react-bootstrap';

function FormularioLivros () {
    return(
    <div>
        <h2 className="titulo">Lista de livros cadastrados</h2>
            <p>Biblioteca Nacional de Brasília</p>

        {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
            <div className="lista">
                <div className="list-group" >
                        <div className="d-flex w-100 justify-content-between" >
                            <p className="mb-1">Nome do Autor: Fulano de Tal</p>
                            <small>Data de publicação: 3 days ago</small>
                        </div>
                        <h6 className="mb-1">Nome do Livro: {breakpoint}</h6>
                    <Button>Apagar</Button>
                </div>
            </div>
        ))}

    </div>
    )
}

export default FormularioLivros;