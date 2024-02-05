import { Fragment, useState } from "react";
import MainNav from "./components/MainNav";
import ChartCard from "./components/ChartCard";
import { Container, Row, Col } from "react-bootstrap";
import BlogForm from "./components/BlogForm";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: "1234",
      title: "Tonye's Blog",
      description:
        "I am going to write about my blog and this is it how it goes",
    },
    {
      id: "1235",
      title: "Abula's Blog",
      description:
        "I am going to give you the best item of the week, the best news you ever hear from me",
    },
  ]);

  const createNewBlog = (blogData) => {
    return setBlogs([...blogs, blogData]);
  };

  return (
    <Fragment>
      <MainNav />
      <Container className="mt-5">
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            {blogs.map((blog) => {
              return (
                <ChartCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
            <BlogForm createNewBlog={createNewBlog} />
          </Col>

          <Col lg={3}></Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
