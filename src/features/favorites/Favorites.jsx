import { useDispatch, useSelector } from "react-redux";
import { clearFav, getFav } from "./favoritesSlice";
import FavItems from "./FavItems";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const fav = useSelector(getFav);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClearWishlist() {
    dispatch(clearFav());
  }

  if (fav.length === 0) {
    return (
      <main className="min-h-screen bg-[#3d2724] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold text-[#f7f2ed]">My Wishlist</h1>

          <div className="mt-16 text-center">
            <p className="text-lg text-[#d8cbc2]">Your wishlist is empty.</p>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 rounded-lg bg-[#f7f2ed] px-8 py-3 font-medium text-[#33211e]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#3d2724] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#f7f2ed]">
              My Wishlist
            </h1>

            <p className="mt-2 text-[#d8cbc2]">
              {fav.length} {fav.length === 1 ? "item" : "items"}
            </p>
          </div>

          <button
            onClick={handleClearWishlist}
            className="rounded-lg border border-[#d8cbc2] px-4 py-2 text-sm text-[#f7f2ed] transition hover:bg-[#f7f2ed] hover:text-[#33211e]"
          >
            Clear Wishlist
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fav.map((item) => (
            <FavItems key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Favorites;
