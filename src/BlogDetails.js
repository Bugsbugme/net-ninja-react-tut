import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

/**
 * It fetches the blog details from the server and displays them.
 * @returns The blog details component is returning a div with an article element inside. The article
 * element has a heading, a paragraph, and a div. The heading is the title of the blog, the paragraph
 * is the author of the blog, and the div is the body of the blog.
 */
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  /**
   * It deletes the blog with the given id.
   */
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
/* A div with a class name of `blog-details`. Inside of it, it has a conditional rendering. If the
`isPending` is true, it will render `Loading...`. If the `error` is not null, it will render the
`error`. If the `blog` is not null, it will render the blog details. */
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
