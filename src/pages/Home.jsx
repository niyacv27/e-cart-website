import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import { FaSpa, FaShoppingBasket, FaCouch, FaSprayCan } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative w-full">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2024/9/454600649/QT/IL/OK/127683515/ekart-logistics.jpg"
          alt="E Cart"
          className="w-full h-[700px] object-cover"
        />

        <button
          onClick={() => navigate("/products")}
          className="absolute top-1/2 left-1/2
                     -translate-x-1/2 -translate-y-1/2
                     bg-blue-400 
                     text-white text-lg
                     px-7 py-3
                     rounded-lg
                     transition duration-300">
          Shop Now
        </button>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Shop By Category</h2>

          <p className="text-gray-500 mt-3 text-lg">
            Explore our products and find everything you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="text-center">
              <FaSpa className="text-4xl text-pink-600 mx-auto mb-5" />

              <h3 className="text-2xl font-bold text-gray-800">Beauty</h3>

              <p className="text-gray-500 mt-3">
                Discover beauty and personal care products.
              </p>
            </div>
          </Card>

          <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="text-center">
              <FaShoppingBasket className="text-4xl text-green-600 mx-auto mb-5" />

              <h3 className="text-2xl font-bold text-gray-800">Groceries</h3>

              <p className="text-gray-500 mt-3">
                Shop for your everyday grocery essentials.
              </p>
            </div>
          </Card>

          <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="text-center">
              <FaCouch className="text-4xl text-blue-600 mx-auto mb-5" />

              <h3 className="text-2xl font-bold text-gray-800">Furniture</h3>

              <p className="text-gray-500 mt-3">
                Stylish furniture for your home and office.
              </p>
            </div>
          </Card>

          <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="text-center">
              <FaSprayCan className="text-4xl text-purple-600 mx-auto mb-5" />

              <h3 className="text-2xl font-bold text-gray-800">Fragrances</h3>

              <p className="text-gray-500 mt-3">
                Find your favorite fragrances and perfumes.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;
