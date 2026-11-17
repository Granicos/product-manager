import { useState } from "react";
import { getProductById } from "../services/productService";
import { useParams } from "react-router";
import ProductForm from "../components/ProductForm";
import { useEffect } from "react";

function EditProductPage() {
  const [produit, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, []);

  return <ProductForm product={produit} />;
}

export default EditProductPage;
