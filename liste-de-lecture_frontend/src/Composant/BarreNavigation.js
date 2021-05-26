import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';


function BarreNavigation() {
    return (
        <Navbar bg="primary" variant="dark" className="mt-3">
            <Navbar.Brand aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <LinkContainer to="/" exact>
                        <Nav.Link>Acceuil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/repertoire" exact>
                        <Nav.Link>Repertoire</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/categories" exact>
                        <Nav.Link>Catégories</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ajouter-piece">
                    <Nav.Link> Ajout Piece </Nav.Link>
                </LinkContainer>  
                </Nav>
            </Navbar.Collapse>
            <Form className="d-flex justify-content-end">
                <FormControl type="text" placeholder="Rechercher un musicien" className="mr-sm-2" />
                <Button variant="outline-light">Rechercher</Button>
            </Form>
        </Navbar>
    );
}

export default BarreNavigation;
