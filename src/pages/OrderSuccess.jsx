import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-4"> 🎉Order Successful!</h2>
      <p className="text-gray-600 mb-4">
        Thank you for your order. Your delicious food will be delivered soon.
      </p>
      <Link
        to="/menu"
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
      >
        Order More
      </Link>
    </div>
  );
};

export default OrderSuccess;
