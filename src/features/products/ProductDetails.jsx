import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../apidata";
import { Heart, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { toast } from "sonner";
import { getFav, toggleFavorite } from "../favorites/favoritesSlice";

function ProductDetails() {
  const product = useLoaderData();
  const dispatch = useDispatch();
  const favorites = useSelector(getFav);

  const isFavorite = favorites.some((fav) => fav.id === product.id);
  function handleFavorite() {
    dispatch(toggleFavorite(product));

    if (isFavorite) {
      toast("Item removed from favorites");
    } else {
      toast.success("Item added to favorites");
    }
  }
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
      <div className="overflow-hidden rounded-lg bg-[#f1e9e2]">
        <img
          className="aspect-square h-full w-full object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col justify-center bg-[#f7f2ed] px-8 py-12 md:px-12">
        {" "}
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#75645b]">
          {product.category}
        </p>
        <h1 className="text-3xl font-medium tracking-tight text-[#241c1a] md:text-4xl">
          {product.title}
        </h1>
        <p className="mt-4 text-xl text-[#75645b]">${product.price}</p>
        <p className="mt-8 max-w-lg text-sm leading-7 text-[#75645b]">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => {
              dispatch(addItem(product));
              toast.success("Item added to bag");
            }}
            className="flex flex-1 items-center justify-center gap-3 rounded-sm bg-[#33211e] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#241714]"
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
            Add to Bag
          </button>

          <button
            onClick={handleFavorite}
            className={`  transition ${
              isFavorite
                ? "bg-[#33211e] text-white"
                : "bg-[#e4d7ce] text-[#33211e] hover:bg-[#33211e] hover:text-white"
            } flex h-12 w-12 items-center justify-center rounded-sm border border-[#d8cbc2] text-[#33211e] transition hover:bg-[#f1e9e2]`}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              size={19}
              strokeWidth={1.8}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
// eslint-disable-next-line
export async function loader({ params }) {
  const product = await getProduct(params.productId);

  return product;
}
export default ProductDetails;
