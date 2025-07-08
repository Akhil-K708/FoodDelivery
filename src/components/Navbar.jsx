import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { setSearchQuery } = useContext(SearchContext);
  const { cartItems } = useContext(CartContext);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        Foodie
      </Link>

      <div className="hidden md:flex items-center">
        <input
          type="text"
          placeholder="Search food..."
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/menu" className="hover:text-orange-500">
          Menu
        </Link>
        
        <Link to="/cart" className="relative hover:text-orange-500">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <Link to="/checkout" className="hover:text-orange-500">
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
