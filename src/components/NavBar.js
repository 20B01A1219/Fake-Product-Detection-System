import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Fake Product Detection System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/instructions">Instructions</Nav.Link>
            <NavDropdown title="Sign up/Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/employeelogin">Employee Login</NavDropdown.Item>
              <NavDropdown.Item href="/userlogin">User Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">
                Sign up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

