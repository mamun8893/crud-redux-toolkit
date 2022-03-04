import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost, setEdit, updatePost } from "../redux/features/postSlice";

const Post = ({ post, edit, body }) => {
  const dispatch = useDispatch();
  const [bodyText, setBodyText] = useState("");

  useEffect(() => {
    if (body) {
      setBodyText(body);
    }
  }, [body]);

  const handleUpdate = () => {
    dispatch(
      updatePost({
        id: post.id,
        title: post.title,
        body: bodyText,
      })
    );
    dispatch(setEdit({ edit: false, body: "" }));
  };

  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          {edit ? (
            <>
              <Form.Control
                className="mb-4 mt-4"
                as="textarea"
                rows={3}
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
              />
              <Button variant="primary" onClick={handleUpdate}>
                Save
              </Button>
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => dispatch(setEdit({ edit: false, body: "" }))}
              >
                Cancle
              </Button>
            </>
          ) : (
            <Card.Text>{post.body}</Card.Text>
          )}
          {console.log(edit)}

          {!edit && (
            <>
              <Button
                variant="primary"
                onClick={() =>
                  dispatch(setEdit({ edit: true, body: post.body }))
                }
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => dispatch(deletePost({ postId: post.id }))}
              >
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
