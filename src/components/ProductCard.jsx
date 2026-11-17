import { Link } from "react-router";

function ProductCard({ produit }) {
  return (
    <div className="col-4 mb-3" key={produit.id}>
      <div className="card">
        <img src={produit.image} className="card-img-top" alt={produit.name} />
        <div className="card-body">
          <h5 className="card-title">{produit.name}</h5>
          <p className="card-text">{produit.description}</p>
          <p className="fw-bold text-primary">{produit.price}€</p>
          <Link to={`/product/${produit.id}`} className="btn btn-primary">
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
