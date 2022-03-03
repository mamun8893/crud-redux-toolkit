import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [postId, setPostId] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPostId(e.target.value);
  };
  const fatchUserPost = () => {
    console.log(postId);
  };
  const handleNavigate = () => {
    navigate("/create-post");
  };

  return (
    <div>
      <div className="container pt-4">
        <h2 className="text-center">Fatch Post</h2>
        <Form className="w-50 m-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="number"
              placeholder="Enter User Id"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={fatchUserPost}>
            Fatch User Post
          </Button>
          <Button className="ms-2" variant="primary" onClick={handleNavigate}>
            Create User Post
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
