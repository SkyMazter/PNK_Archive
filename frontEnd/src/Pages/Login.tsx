import { Button, Container, Form, InputGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container fluid={"md"}>
        <Row className="h-auto py-2 justify-content-around">
          <Col xs={9} lg={4}>
            <h1>Login</h1>
            <Form>
              <InputGroup className="my-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  type="Username"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="my-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Input Here"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Link to="/">
                <Button variant="link">Already have an account?</Button>
              </Link>
            </Form>
          </Col>
        </Row>

        <Row className="h-auto py-2 justify-content-center">
          <Col xs={5} lg={3}>
            <div className=" d-flex justify-content-center">
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Col>

          <Col xs={5} lg={3}>
            <div className=" d-flex justify-content-center">
              <Link to="/">
                <Button variant={"outline-danger"}>Cancel</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
