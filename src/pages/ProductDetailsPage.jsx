import { getProductById, deleteProduct } from "../services/productService";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";

function ProductDetailsPage() {
  const [produit, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
    await deleteProduct(id);
    await navigate("/");
  }
  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>{produit.name}</h2>
      <img src={produit.image} alt={produit.name} width="300" />
      <p>{produit.description}</p>
      <p className="fw-bold text-primary">{produit.price}€</p>
      <div className="d-flex gap-2">
        <button className="btn btn-danger" onClick={handleDelete}>
          Supprimer
        </button>
        <Link to={`/product/edit/${produit.id}`} className="btn btn-warning">
          Modifier
        </Link>
        <Link to="/" className="btn btn-secondary">
          Retour
        </Link>
      </div>
    </div>
  );
}
export default ProductDetailsPage;
