import { Link } from "react-router-dom";

/**
 * It renders a page that says that the page cannot be found.
 * @returns A React component.
 */
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Go back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
