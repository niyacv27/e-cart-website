import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Card,
} from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  decrementCart,
  deleteItem,
  emptyCart,
  incrementCart,
} from "../redux/slices/cartSlice";

import { FaPlus, FaMinus } from "react-icons/fa6";
import Swal from "sweetalert2";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  console.log(cart);

  const handleCheckout = () => {
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {cart.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Your Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <Table hoverable>
                  <TableHead>
                    <TableRow className="border-b-2 border-gray-300">
                      <TableHeadCell>Product</TableHeadCell>

                      <TableHeadCell className="text-center">
                        Image
                      </TableHeadCell>

                      <TableHeadCell className="text-center">
                        Quantity
                      </TableHeadCell>

                      <TableHeadCell className="text-center">
                        Price
                      </TableHeadCell>

                      <TableHeadCell className="text-center">
                        Action
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {cart.map((item) => (
                      <TableRow
                        key={item.id}
                        className="border-b border-gray-300 bg-white"
                      >
                        <TableCell className="whitespace-nowrap font-semibold text-gray-900">
                          {item.title}
                        </TableCell>

                        <TableCell>
                          <div className="flex justify-center">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center gap-4">
                            <Button
                              onClick={() => dispatch(incrementCart(item))}>
                              <FaPlus />
                            </Button>

                            <span className="w-8 text-center text-lg font-semibold">
                              {item.quantity}
                            </span>

                            <Button
                              onClick={() => dispatch(decrementCart(item))}>
                              <FaMinus />
                            </Button>
                          </div>
                        </TableCell>

                        <TableCell className="text-center font-semibold">
                          ₹{item.price}
                        </TableCell>

                        <TableCell className="text-center">
                          <button
                            onClick={() => dispatch(deleteItem(item.id))}
                            type="button"
                            className="font-semibold text-red-600 hover:text-red-800">
                            Remove
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-center items-center gap-3 mt-8">
                <Link to="/products">
                  <Button>Shop More</Button>
                </Link>

                <Button onClick={() => dispatch(emptyCart())}>
                  Empty Cart
                </Button>
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <h5 className="text-2xl font-bold text-gray-900">
                  Total {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
                  Items
                </h5>

                <p className="text-lg text-gray-700">
                  Total Amount :
                  <span className="text-red-500 font-semibold ml-2">
                    ₹
                    {cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )}
                  </span>
                </p>

                <hr className="my-2" />

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700">
                  Check Out
                </Button>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        /* EMPTY CART */

        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <img
            src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
            alt="Empty Cart"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
          />

          <p className="mt-4 text-xl sm:text-2xl font-bold text-gray-700">
            YOUR CART IS EMPTY
          </p>

          <Link to="/products">
            <Button className="mt-4">Add Products</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
