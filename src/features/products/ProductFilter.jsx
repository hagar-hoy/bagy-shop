import { useLoaderData } from "react-router-dom";
import { getProductsFiltered } from "../../apidata";
import Filter from "./Filter";
import ProductItem from "./ProductItem";

function ProductFilter() {
  const products = useLoaderData();
  return (
    <>
      {" "}
      <Filter />
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
    </>
  );
}

export default ProductFilter;
// eslint-disable-next-line
export async function loader({ params }) {
  const product = await getProductsFiltered(params.productId);

  return product;
}
