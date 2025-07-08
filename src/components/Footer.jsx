const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Foodie</h2>
          <p className="text-sm">
            Delicious food delivered right to your doorstep. Fast, fresh, and tasty!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="/cart" className="hover:text-orange-500">Cart</a></li>
            <li><a href="/checkout" className="hover:text-orange-500">Checkout</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Hyderabad, India</p>
          <p className="text-sm">Phone: +91 96035 37785</p>
          <p className="text-sm">Email: support@foodie.com</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
