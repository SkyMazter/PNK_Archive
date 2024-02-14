import { Container } from "react-bootstrap";
import Post from "./Post";
import Stack from "react-bootstrap/Stack";

const PostView = () => {
  const style = {
    overflow: "auto",
  };
  return (
    <div>
      <Container fluid={"md"} style={style}>
        <Stack gap={3} className="my-3">
          <Post file="" username="user" description="description"></Post>
        </Stack>
      </Container>
    </div>
  );
};

export default PostView;
