import { getProducts } from "../services/productService";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Bienvenue sur Product Manager</h1>
      <div className="row">
        {products.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
