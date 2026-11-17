const API_URL = "http://localhost:3000/products";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des produits");
  }

  return await response.json();
}

export async function addProducts(product) {
  const image = "https://placehold.co/400x250";
  const available = true;
  const fullProduct = { ...product, image, available };
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fullProduct),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout du produit");
  }

  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du produit");
  }
  return await response.json();
}

export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du produit");
  }

  return await response.json();
}

export async function updateProduct(id, product) {
  const image = "https://placehold.co/400x250";
  const available = true;
  const fullProduct = { ...product, image, available };
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fullProduct),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du produit");
  }

  return await response.json();
}
