import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">React ass2</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="mx-3"><button class="btn btn-success">Home</button></Link>
      <Link to="/about" className="mx-3"><button class="btn btn-success">About Us</button></Link>
      <Link to="/contact" className="mx-3"><button class="btn btn-success">Contact Us</button></Link>
      <Link to="/product" className="mx-3"><button class="btn btn-success">Products</button></Link>

    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

