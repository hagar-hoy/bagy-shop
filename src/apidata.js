const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Could not load products");
  }

  const data = await res.json();

  console.log(data);

  return data.products;
}
export async function getProduct(productId) {
  const res = await fetch(`${BASE_URL}/${productId}`);

  const data = await res.json();

  return data;
}
export async function getProductsFiltered(filter) {
  const res = await fetch(`${BASE_URL}/${filter}`);

  if (!res.ok) {
    throw new Error("Could not load products");
  }

  const data = await res.json();

  console.log(data);

  return data.products;
}
