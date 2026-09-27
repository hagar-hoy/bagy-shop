import { Link } from "react-router-dom";
import { Heart, User, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { getTotalItems } from "../features/cart/cartSlice";
function Header() {
  const totalItems = useSelector(getTotalItems);
  return (
    <header className="bg-[#e9e1d9]">
      <nav className="flex items-center justify-between px-8 py-4">
        <ul className="flex gap-6">
          <li>
            <Link to="/products" className="nav-link">
              Shop
            </Link>{" "}
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          className="font-['Bodoni_Moda'] text-3xl font-semibold tracking-wide"
        >
          BAGY
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link to="/favorites" className="group">
              <Heart className="h-5 w-5 transition-all group-hover:fill-current" />
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="relative">
              {totalItems > 0 && (
                <div className="bg-[#33211e] text-white rounded-full flex justify-center items-center h-[18px] min-w-[18px] text-[11px] font-bold absolute right-[-4px] top-[-4px] px-1.5 shadow-sm animate-pulse">
                  {totalItems}
                </div>
              )}
              <ShoppingCart size={20} />
            </Link>
          </li>
          <li>
            <Link className="flex gap-1" to="/login">
              <span className="nav-link">Login</span>
              <User size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
