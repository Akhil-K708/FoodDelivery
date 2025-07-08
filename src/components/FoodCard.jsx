import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FoodCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-contain p-4"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-orange-600 font-bold mb-4">₹{item.price}</p>

        <button
          onClick={() => addToCart(item)}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
