import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()  

    const logOutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className='py-3'>
            <Container>
            <Navbar.Brand>
                <i className="fas fa-list" style={{paddingRight:'10px'}} ></i>
                ToDO-APP
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                { userInfo ? (<Navbar.Brand>{userInfo.name}</Navbar.Brand> ) : (  <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-sign-in-alt" style={{paddingRight:'5px'}}></i>Sign In</Nav.Link>
                </LinkContainer>)}
                <Nav.Link onClick={logOutHandler}><i className="fas fa-sign-out-alt" style={{paddingRight:'5px'}}></i>Sign Out</Nav.Link>
             
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
