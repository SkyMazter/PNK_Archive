import { useParams } from "react-router";
import { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "./Post";
import Button from "react-bootstrap/Button";

interface Posts {
  id: string;
  title: string;
  category: string;
  description: string;
  filePath: string;
  fileName: string;
  username: string;
}

const FilteredView = () => {
  const [show, setShow] = useState<boolean>(false);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [postCount, setPostCount] = useState<number>(30);

  const param = useParams();

  const handleGetFilteredPosts = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/filter?category=${param.category}&n=${postCount}`,
      );
      const data = await response.json();

      setPosts(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }, [param, postCount]);
  const style = {
    overflow: "auto",
  };
  const handleLoadMore = () => {
    setPostCount(postCount + 20);
  };
  useEffect(() => {
    handleGetFilteredPosts();
    setShow(true);
  }, [handleGetFilteredPosts]);

  return (
    <div>
      <Container fluid={"sm"} style={style}>
        <Row>
          <Col className="">
            {show
              ? posts.map((post, index) => (
                  <Post
                    fileName={post.fileName}
                    filePath={post.filePath}
                    key={index}
                    username={post.username}
                    description={post.description}
                    title={post.title}
                    category={post.category}
                  ></Post>
                ))
              : ""}
          </Col>
        </Row>
        <Row xs={12}>
          <Col className="d-flex justify-content-center py-1">
            <Button variant="light" onClick={handleLoadMore}>
              Load More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilteredView;
