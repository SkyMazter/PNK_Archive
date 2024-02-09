import { Button, Navbar } from "react-bootstrap";

interface Props {
  isLoggedIn: boolean;
}

const LoginStatus = ({ isLoggedIn }: Props) => {
  if (isLoggedIn == false)
    return <Button variant={"outline-secondary"}>Log In</Button>;
  return (
    <Navbar.Text>
      Signed in as: <a href="#login">Oscar Comunidad</a>
    </Navbar.Text>
  );
};

export default LoginStatus;
