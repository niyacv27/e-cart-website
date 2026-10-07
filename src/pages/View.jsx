import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { FaStar } from "react-icons/fa";

function View() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  const { allProducts } = useSelector((state) => state.productReducer);

  const wishlist = useSelector((state) => state.wishlistReducer);

  const cart = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const handleWishlist = () => {
    const existingProduct = wishlist.find((item) => item.id == product.id);

    if (existingProduct) {
      alert("Product Already existing");
    } else {
      dispatch(addToWishlist(product));
      alert("Product Added to Wishlist");
    }
  };

  const handleCart = () => {
    const existingProduct = cart.find((item) => item.id == product.id);

    if (existingProduct) {
      alert("Product Already existing");
    } else {
      dispatch(addToCart(product));
      alert("Product Added to Cart");
    }
  };

  useEffect(() => {
    setProduct(allProducts.find((item) => item.id == id));
  }, []);

  console.log(product);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-full h-[500px] flex items-center justify-center">
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-24 mt-8">
              <Button
                onClick={handleWishlist}
                className="bg-sky-500 hover:bg-sky-600 px-6">
                Add to Wishlist
              </Button>

              <Button
                onClick={handleCart}
                className="bg-green-600 hover:bg-green-700 px-6">
                Add to Cart
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              {product?.title}
            </h1>

            <p className="text-3xl text-red-500 mb-4">$ {product?.price}</p>

            <p className="text-lg text-gray-800 mb-2">
              <span className="font-bold">Brand :</span>

              {product?.brand}
            </p>

            <p className="text-lg text-gray-800 mb-4">
              <span className="font-bold">Category :</span>

              {product?.category}
            </p>

            <p className="text-gray-700 leading-6 mb-6">
              <span className="font-bold">Description :</span>

              {product?.description}
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Client Reviews
            </h2>

            <Card className="shadow-md mb-3">
              <p className="text-gray-800">
                <span className="font-bold">Ananya :</span>
                Great product! I really liked the quality.
              </p>

              <p className="mt-3 text-gray-700">
                Rating : 5
                <FaStar className="inline ml-2 text-yellow-500" />
              </p>
            </Card>

            <Card className="shadow-md mb-3">
              <p className="text-gray-800">
                <span className="font-bold">Rahul :</span>
                Good product and worth the price.
              </p>

              <p className="mt-3 text-gray-700">
                Rating : 4
                <FaStar className="inline ml-2 text-yellow-500" />
              </p>
            </Card>

            <Card className="shadow-md">
              <p className="text-gray-800">
                <span className="font-bold">Meera :</span>
                The product looks exactly as shown in the picture.
              </p>

              <p className="mt-3 text-gray-700">
                Rating : 5
                <FaStar className="inline ml-2 text-yellow-500" />
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
