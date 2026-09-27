import { ShoppingBag, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../cart/cartSlice";
import { toast } from "sonner";
import { getFav, toggleFavorite } from "../favorites/favoritesSlice";

function ProductItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(getFav);

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  function handleSubmit() {
    navigate(`/products/${product.id}`);
  }

  function handleFavorite(e) {
    e.stopPropagation();

    dispatch(toggleFavorite(product));

    if (isFavorite) {
      toast("Item removed from favorites");
    } else {
      toast.success("Item added to favorites");
    }
  }

  function handleAddToBag(e) {
    e.stopPropagation();
    dispatch(addItem(product));
    toast.success("Item added to bag");
  }

  return (
    <li
      onClick={handleSubmit}
      className="overflow-hidden rounded-lg bg-[#f1e9e2] text-[#241c1a]"
    >
      <div className="aspect-square overflow-hidden bg-[#faf8f6]">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium tracking-tight">
              {product.title}
            </h3>

            <p className="mt-1 text-sm text-[#75645b]">${product.price}</p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={handleAddToBag}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         bg-[#e4d7ce] text-[#33211e]
                         transition hover:bg-[#33211e] hover:text-white"
              aria-label="Add to bag"
            >
              <ShoppingBag size={17} strokeWidth={1.8} />
            </button>

            <button
              onClick={handleFavorite}
              className={`flex h-9 w-9 items-center justify-center rounded-full
                         transition
                         ${
                           isFavorite
                             ? "bg-[#33211e] text-white"
                             : "bg-[#e4d7ce] text-[#33211e] hover:bg-[#33211e] hover:text-white"
                         }`}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Heart
                size={17}
                strokeWidth={1.8}
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
