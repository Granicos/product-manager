import { useState } from "react";
import { addProducts } from "../services/productService";
import { useNavigate } from "react-router";

function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("https://placehold.co/400x250");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log({ name, description, price });
    const newProduct = { name, description, price, image };
    await addProducts(newProduct);
    await navigate("/");
  }

  return (
    <div className="container mt-5">
      <h3>Ajouter un produit</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control mb-3"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Prix</label>
        <input
          type="number"
          className="form-control mb-3"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
