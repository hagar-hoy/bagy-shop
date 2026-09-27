import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, deleteItem } from "./cartSlice";
import { LucideDelete } from "lucide-react";

function CartItem({ product }) {
  const dispatch = useDispatch();
  console.log(product);
  console.log(product.thumbnail);

  return (
    <li className="flex items-center justify-between gap-4 p-5 sm:p-6">
      <div className="flex min-w-0 items-center gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f1e9e2]">
          <img
            className="h-full w-full object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#33211e] sm:text-base">
            {product.title}
          </h3>

          <p className="mt-1 text-sm text-[#75645b]">
            ${product.unitPrice * product.quantity}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div className="flex items-center overflow-hidden rounded-lg border border-[#d8cbc2] bg-[#f7f2ed]">
          <button
            onClick={() => dispatch(decreaseItem(product.id))}
            className="flex h-9 w-9 items-center justify-center text-lg font-medium text-[#3E2723] transition hover:bg-[#e9ded7] active:scale-95"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="flex h-9 min-w-9 items-center justify-center border-x border-[#d8cbc2] px-2 text-sm font-semibold text-[#33211e]">
            {product.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseItem(product.id))}
            className="flex h-9 w-9 items-center justify-center text-lg font-medium text-[#3E2723] transition hover:bg-[#e9ded7] active:scale-95"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(deleteItem(product.id))}
          className="rounded-lg p-2 text-[#9b5c5c] transition hover:bg-[#f8eeee] hover:text-[#7d3636] active:scale-95"
          aria-label="Delete item"
          title="Remove item"
        >
          <LucideDelete />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
