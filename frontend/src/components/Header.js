import React from 'react'
import { Navbar,Nav,Form,FormControl,Button, Container } from 'react-bootstrap'

function Header() {
    return (
            <header>
                
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login"><i className="fas fa-user"> LogIn</i></Nav.Link>
      <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"> Cart</i> </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
                
            </header>
        
    )
}

export default Header
