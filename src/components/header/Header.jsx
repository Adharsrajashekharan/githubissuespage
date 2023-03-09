import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/headerStyles.css'
function Header() {
  return (
<Navbar  bg="warning" variant="red" className='p-5'>
      <Container>
        <Navbar.Brand className="mx-auto text-white fs-1 header-title">GitHub Issues</Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )

}

export default Header