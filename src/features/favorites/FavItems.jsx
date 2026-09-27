import { useDispatch } from "react-redux";
import { deleteFromFav } from "./favoritesSlice";
import { addItem } from "../cart/cartSlice";
import { toast } from "sonner";

function FavItems({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="overflow-hidden rounded-2xl bg-[#33211e] text-[#f7f2ed]">
      <div className="relative h-64 bg-[#f7f2ed] p-6">
        <button
          onClick={() => dispatch(deleteFromFav(item.id))}
          aria-label={`Remove ${item.title} from wishlist`}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center
               rounded-full bg-[#f7f2ed]/90 text-xl text-[#33211e]
               transition hover:bg-red-100 hover:text-red-700"
        >
          ×
        </button>

        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-medium">{item.title}</h2>

        <p className="mt-2 text-[#d8cbc2]">Price: ${item.unitPrice}</p>

        <button
          onClick={() => {
            dispatch(addItem(item));
            toast.success("Item added to bag");
          }}
          className="mt-5 w-full rounded-lg bg-[#f7f2ed] py-3 text-[#33211e] transition hover:bg-[#d8cbc2]"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default FavItems;
