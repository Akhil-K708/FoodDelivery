import { Link } from "react-router-dom";
import bannerImg from "../assets/food/banner-food.png";

const Banner = () => {
  return (
    <div className="bg-orange-50 py-20 px-6 flex flex-col md:flex-row items-center justify-between pt-20">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-5xl font-bold mb-6 text-orange-500">
          Delicious Food Delivered to You
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Fresh, fast, and tasty. Choose from our wide variety of dishes and
          enjoy quick delivery at your doorstep.
        </p>
        <Link
          to="/menu"
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        >
          Order Now
        </Link>
      </div>

      <div className="md:w-1/2">
        <img
          src={bannerImg}
          alt="Delicious Food"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
