import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {

    const handleClick = () => {
        console.log('go to Login Page!');
      };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SignaI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Tools</Nav.Link>    
        </Nav>

        <Nav>
            <Link to='/LoginPage' style={{ marginRight: '10px' }}>
                <Button variant="dark" onClick={handleClick}>Login</Button>
            </Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;