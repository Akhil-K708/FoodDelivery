import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cartItems, getTotalPrice, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [upiApp, setUpiApp] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handlePayNow = () => {
    if (!name || !address) {
      alert("Please enter your name and address.");
      return;
    }

    if (paymentMethod === "UPI" && (!upiApp || !upiId)) {
      alert("Please select UPI app and enter UPI ID.");
      return;
    }

    if (
      paymentMethod === "Card" &&
      (!cardDetails.cardNumber ||
        !cardDetails.expiry ||
        !cardDetails.cvv)
    ) {
      alert("Please fill in all card details.");
      return;
    }

    alert("🎉 Payment successful! Order placed.");
    setCartItems([]);
    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Payment</h2>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">Payment</h2>

      <input
        type="text"
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border w-full p-3 rounded mb-4"
      />

      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border w-full p-3 rounded mb-6"
      />

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Select Payment Method:</h3>
        <div className="flex space-x-4">
          {["Card", "UPI", "Cash on Delivery"].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`border px-4 py-2 rounded ${
                paymentMethod === method
                  ? "bg-orange-500 text-white"
                  : "bg-white"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {paymentMethod === "UPI" && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Choose UPI App:</h4>
            <div className="flex space-x-4">
              {[
                { name: "GPay", icon: "/images/upi/gpay.png" },
                { name: "PhonePe", icon: "/images/upi/phonepe.png" },
                { name: "Paytm", icon: "/images/upi/paytm.png" },
              ].map((app) => (
                <button
                  key={app.name}
                  onClick={() => setUpiApp(app.name)}
                  className={`border px-4 py-2 rounded flex items-center space-x-2 ${
                    upiApp === app.name
                      ? "bg-orange-500 text-white"
                      : "bg-white"
                  }`}
                >
                  <img src={app.icon} alt={app.name} className="w-6 h-6" />
                  <span>{app.name}</span>
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="border w-full p-3 rounded mb-6"
          />
        </>
      )}

      {paymentMethod === "Card" && (
        <>
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
            className="border w-full p-3 rounded mb-4"
          />
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
              className="border w-full p-3 rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              className="border w-full p-3 rounded"
            />
          </div>
        </>
      )}

      {paymentMethod === "Cash on Delivery" && (
        <div className="mb-6 border rounded-lg p-4 bg-yellow-50 shadow-sm">
          <h4 className="font-semibold text-lg mb-2 text-orange-500">
            Cash on Delivery
          </h4>
          <p className="text-gray-700">
            You will pay with <span className="font-semibold">cash</span> when
            your order is delivered to your address. Please ensure you have the
            exact amount ready.
          </p>
        </div>
      )}

      <div className="text-right text-lg mb-4">
        Total:{" "}
        <span className="text-orange-600 font-bold">₹{getTotalPrice()}</span>
      </div>

      <button
        onClick={handlePayNow}
        className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
      >
        {paymentMethod === "Cash on Delivery" ? "Confirm Order" : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;
