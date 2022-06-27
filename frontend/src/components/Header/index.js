import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BN from "../../assets/img/BN.png"

function Header () {
    return(
        <Navbar bg="light" variant="dark" style={{marginBottom:"70px"}}>
            <Container>
                <Navbar.Brand href="#home">
                    <a href="https://www.cultura.df.gov.br/biblioteca-nacional-da-brasilia/">
                        <img src={BN} style={{height:"50px", width:"150px"}}/>
                    </a>
                </Navbar.Brand>
            </Container>
        </Navbar>
        )
}

export default Header;