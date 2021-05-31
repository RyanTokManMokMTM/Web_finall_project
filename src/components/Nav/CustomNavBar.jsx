
//NavDropdown,Form,Button,FormControl
import {Navbar,Nav,Button} from 'react-bootstrap'

const CustionNavBar = (props) =>{
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Movie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/test">Link</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                <div>
                <Button href="/login" size="sm" style={{marginRight:"10px"}}>Login</Button> 
                <Button href="/signup" size="sm" style={{marginRight:"10px"}}>SignUp</Button> 
                </div>
             
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustionNavBar