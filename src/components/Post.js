import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/features/postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">Edit</Button>
          <Button
            variant="danger"
            className="ms-2"
            onClick={() => dispatch(deletePost({ postId: post.id }))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
