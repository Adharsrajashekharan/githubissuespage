import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<Navbar  bg="warning" variant="red" className='p-5'>
      <Container>
        <Navbar.Brand href="#home" className="mx-auto text-white fs-1" style={{ fontSize: "28px",position:'absolute',left:"50%", transform: "translateX(-50%)"
 }}>GitHub Issues</Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* created by <a href="#login">Adhars rajashekharan</a> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )

}

export default Header