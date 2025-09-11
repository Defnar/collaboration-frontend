import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="p-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 flex justify-between">
      <Link to="/" className="font-bold text-xl">Job/Store Dashboard</Link>
      <div>
        <Link to="/cart" className="relative">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;