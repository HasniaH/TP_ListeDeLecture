import React from 'react';
import { NavDropdown } from 'react-bootstrap';

function PageCategories() {
    return (
        <NavDropdown title="Liste des catégories" id="nav-dropdown">
            <NavDropdown.Item >Chanteurs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Compositeurs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Orchestrateurs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Siffleurs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Interpretes</NavDropdown.Item>
        </NavDropdown>
    )

}

export default PageCategories