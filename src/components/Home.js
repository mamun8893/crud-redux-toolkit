import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost } from "../redux/features/postSlice";
import LoadingCard from "./LoadingCard";
import Post from "./Post";

const Home = () => {
  const [postId, setPostId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post, body, edit } = useSelector((state) => ({
    ...state.app,
  }));

  console.log(post);

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
  //   console.log(post);

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
        <br />
        <br />
        {loading ? (
          <LoadingCard />
        ) : (
          <>{post.id && <Post post={post} edit={edit} body={body} />}</>
        )}
      </div>
    </div>
  );
};

export default Home;
