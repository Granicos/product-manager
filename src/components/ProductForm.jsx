import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { addProducts, updateProduct } from "../services/productService";
import { useNavigate, Link } from "react-router";

function ProductForm({ product }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
    } else {
      setName("");
      setDescription("");
      setPrice("");
    }
  }, [product]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (product) {
      await updateProduct(product.id, { name, description, price });
    } else {
      await addProducts({ name, description, price });
    }
    await navigate("/");
  }

  const isEditing = Boolean(product);

  return (
    <div className="container mt-5">
      <h3>{isEditing ? "Modifier un produit" : "Ajouter un produit"}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="form-control mb-3"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="price">Prix</label>
        <input
          type="number"
          className="form-control mb-3"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            {isEditing ? "Modifier" : "Ajouter"}
          </button>
          <Link to="/" className="btn btn-secondary">
            Retour
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
