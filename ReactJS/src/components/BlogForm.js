import { Fragment, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const BlogForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const titleRef = useRef();
  // const descriptionRef = useRef();

  const onCreateNewBlog = (event) => {
    event.preventDefault();

    // const title = titleRef.current.value;
    // const description = descriptionRef.current.value;

    if (!title || !description) {
      return setErrorMessage("Tittle and description are required");
    }

    props.createNewBlog({
      title,
      description,
      id: Math.floor(Math.random() * 1000000) + "askljsd",
    });

    setTitle("");
    return setDescription("");
  };

  return (
    <Fragment>
      <h2 className="mt-5 mb-3">Create new blog</h2>

      {/* {errorMessage ? ( //using tenary operator
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      ) : (
        <div></div>
      )}  */}

      {errorMessage && (
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <Form onSubmit={onCreateNewBlog}>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            // ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            // ref={descriptionRef}
          />
        </Form.Group>

        <Button type="submit" className="mb-5" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default BlogForm;
