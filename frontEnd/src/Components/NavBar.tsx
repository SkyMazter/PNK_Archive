import { Button, Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginStatus from "./LoginStatus";

interface Props {
  logged_in: boolean;
}

const NavBar = ({ logged_in }: Props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-warning-subtle">
      <Container>
        <Navbar.Brand href="#home">EPNK Archive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Link to={"http://epnk"} className="my-auto">
              <Button
                variant={"link"}
                className="my-auto link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                Home
              </Button>
            </Link>
            <Link to={"http://epnk"} className="my-auto">
              <Button
                variant={"link"}
                className="my-auto link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                About
              </Button>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LoginStatus isLoggedIn={logged_in} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
