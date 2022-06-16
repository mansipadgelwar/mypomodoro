import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">404</h1>
      <h5 className="page-subheading">This page is missing</h5>
      <Link to="/" className="btn btn-link btn-secondary-outline">
        Go back to home
      </Link>
    </div>
  );
};

export { NotFound };
