import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar bg-light shadow-sm">
      <div className="container">
        <div className="d-flex gap-3">
          <Link to="/" className="nav-link">
            Product Manager
          </Link>
          <Link to="/product/add" className="nav-link">
            Ajouter un produit
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
