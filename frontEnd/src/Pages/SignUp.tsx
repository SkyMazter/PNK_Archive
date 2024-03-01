import { Button, Container, Form, InputGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container
      fluid={"md"}
      className="position-absolute top-50 start-50 translate-middle"
    >
      <Row className="h-auto py-2 justify-content-around">
        <Col xs={10} lg={4}>
          <h1>Sign Up</h1>
          <Form>
            <InputGroup className="my-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                type="Username"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                autoComplete="off"
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Text id="basic-addon1">={">"}</InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Text id="basic-addon1">={">"}</InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Link to="/Login">
              <Button variant="link">Already have an account?</Button>
            </Link>
          </Form>
        </Col>
      </Row>

      <Row className="h-auto py-2 justify-content-center">
        <Col xs={5} lg={2}>
          <div className=" d-flex justify-content-start">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Col>

        <Col xs={5} lg={2}>
          <div className=" d-flex justify-content-end">
            <Link to="/">
              <Button variant={"outline-danger"}>Cancel</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
