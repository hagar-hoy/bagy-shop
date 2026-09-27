import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../apidata";
import ProductItem from "./ProductItem";
function Products() {
  const products = useLoaderData();
  return (
    <ul
      className="
      grid
      grid-cols-2
      gap-x-6
      gap-y-10
   
      p-12
      md:grid-cols-3
      lg:grid-cols-5
    "
    >
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

// eslint-disable-next-line
export async function loader() {
  const products = await getProducts();

  return products;
}

export default Products;
