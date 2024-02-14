import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
}

const LoginStatus = ({ isLoggedIn }: Props) => {
  if (isLoggedIn == false)
    return (
      <Link to="/Login">
        <Button variant={"outline-secondary"}>Log In</Button>
      </Link>
    );
  return (
    <Navbar.Text>
      Signed in as: <a href="#login">Oscar Comunidad</a>
    </Navbar.Text>
  );
};

export default LoginStatus;
