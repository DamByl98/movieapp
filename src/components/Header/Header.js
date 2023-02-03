import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div className='head'>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <img
          alt="Logo"
          src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Container>
    </Navbar>
    </div>

    
  )
}

export default Header