import { Button, Container, Form, InputGroup } from "react-bootstrap";
import NavBar from "../Components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar logged_in={false} />
      <Container fluid={"md"}>
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
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
