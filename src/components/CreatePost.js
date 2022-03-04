import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const { title, body } = values;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ title: "", body: "" });
  };
  return (
    <div>
      <div className="container mt-4">
        <Form className="w-50 m-auto" onSubmit={handleSubmit}>
          <h2 className="text-center">Create Post</h2>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Control
              type="text"
              placeholder="Enter Post Title"
              value={title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Enter Body"
              rows={3}
              value={body}
              onChange={(e) => setValues({ ...values, body: e.target.value })}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Create Post
          </Button>
          <Button
            className="ms-2"
            variant="primary"
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreatePost;
