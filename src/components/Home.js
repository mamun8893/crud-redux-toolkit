import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/features/postSlice";

const Home = () => {
  const [postId, setPostId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));

  const handleChange = (e) => {
    setPostId(e.target.value);
  };
  const fatchUserPost = () => {
    if (!postId) {
      alert("Please Provide an ID");
    } else {
      dispatch(getPost({ postId }));
    }
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
