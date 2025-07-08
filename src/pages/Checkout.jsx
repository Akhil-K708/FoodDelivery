import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/payment"); // ✅ Only navigate
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Checkout</h2>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">Checkout</h2>

      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="text-orange-600 font-bold">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="text-right mb-6">
        <h3 className="text-xl font-semibold">
          Total: <span className="text-orange-600">₹{getTotalPrice()}</span>
        </h3>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
