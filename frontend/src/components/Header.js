import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className='py-3'>
            <Container>
            <Navbar.Brand href="#home">
                <i className="fas fa-list" style={{paddingRight:'10px'}} ></i>
                ToDO-APP
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link"><i class="fas fa-sign-out-alt"></i>Sign Out</Nav.Link>
                
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
