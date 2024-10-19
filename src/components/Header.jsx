import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='fs-3'>
          <i className="fa-solid fa-users m-2" style={{color: "#FFD43B",}} />
            {' '}
            Employee Management
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header
