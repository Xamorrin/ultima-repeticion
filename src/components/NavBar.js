import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../img/logo.png';

function NavBar(){
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" ><img src={Logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing">Vestuario Deportivo</Nav.Link>
      <NavDropdown title="Maquinas y pesas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Maquinas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pesas Rusas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mancuernas y Barras</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Bicicletas</Nav.Link>
      <Nav.Link eventKey={2} href="#">
        Nosotros
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}