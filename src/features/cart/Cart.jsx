import { useDispatch, useSelector } from "react-redux";

import { clearCart, getCart, getTotalPrice } from "./cartSlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const totalPrice = useSelector(getTotalPrice);
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#f7f2ed] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#33211e]">
              Your Bag
            </h1>

            <p className="mt-1 text-sm text-[#806d65]">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your bag
            </p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-[#33211e] h-10 w-20 rounded-2xl flex justify-center text-center inline-block items-center text-sm font-medium text-[#d8cbc2] transition hover:text-[#7e7676]"
            >
              Clear cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-[#d8cbc2] bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-[#33211e]">
              Your bag is empty
            </h2>

            <p className="mt-2 text-sm text-[#806d65]">
              Looks like you haven't added anything yet.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 rounded-xl bg-[#3E2723] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2f1d1a] active:scale-[0.98]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-2xl border border-[#d8cbc2] bg-white shadow-sm">
              <ul className="divide-y divide-[#e8ded8]">
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-full rounded-2xl border border-[#d8cbc2] bg-white p-6 shadow-sm sm:max-w-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#806d65]">Subtotal</span>

                  <span className="text-xl font-semibold text-[#33211e]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="my-5 border-t border-[#e8ded8]" />

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate("/products")}
                    className="flex-1 rounded-xl border border-[#d8cbc2] px-4 py-3 text-sm font-medium text-[#3E2723] transition hover:bg-[#f7f2ed]"
                  >
                    Continue Shopping
                  </button>

                  <button
                    onClick={() => navigate("/order/new")}
                    className="flex-1 rounded-xl bg-[#3E2723] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#2f1d1a]"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
