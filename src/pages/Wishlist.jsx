import { Button, Card } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlistReducer);

  console.log(wishlist);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {wishlist.map((item) => (
            <Card
              key={item.id}
              className="w-full h-full shadow-md hover:shadow-xl transition duration-300">
              <div className="h-64 flex items-center justify-center">
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h5 className="text-xl font-semibold text-gray-900 text-center min-h-[56px] flex items-center justify-center">
                {item?.title}
              </h5>

              <Button
                onClick={() => dispatch(addToCart(item))}
                className="bg-cyan-700 hover:bg-cyan-800 px-5 py-2">
                Add To Cart
              </Button>

              <Button
                onClick={() => dispatch(deleteItem(item?.id))}
                className="bg-red-600 hover:bg-red-700 px-5 py-2">
                Remove From Wishlist
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        /* EMPTY WISHLIST */

        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-10 text-center">
          <img
            src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
            alt="Empty Wishlist"
            className="h-80 object-contain"
          />

          <p className="mt-6 text-3xl font-bold text-gray-700">
            YOUR WISHLIST IS EMPTY
          </p>

          <Link to="/products">
            <Button className="mt-4 bg-purple-700 hover:bg-purple-800">
              Add More
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
