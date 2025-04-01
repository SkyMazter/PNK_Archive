import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import { Link } from "react-router-dom";
import LoginStatus from "./LoginStatus";
import { useAppSelector } from "../hooks/hooks";
import Button from "react-bootstrap/Button";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideMenu from "./SideMenu";

const NavBar = () => {
  const logged_in: boolean = useAppSelector((state) => state.login.isActive);
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <div>
      <Container fluid className="py-2 border-bottom border-secondary-subtle">
        <Row className="d-flex align-items-center">
          <Col className="d-flex align-items-center justify-content-start">
            <Button
              variant="light"
              onClick={handleShow}
              className="d-xs-block d-lg-none me-2"
            >
              <CiMenuBurger />
            </Button>
            PNKArchive
          </Col>
          <Col xs={3} lg={5}></Col>
          <Col className="d-flex align-items-center justify-content-end">
            <LoginStatus isLoggedIn={logged_in} />
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
