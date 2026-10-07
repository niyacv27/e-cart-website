import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router-dom";
import { FaTruck, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);

  const cart = useSelector((state) => state.cartReducer);

  return (
    <Navbar fluid className="bg-blue-500 px-6 py-4">
      <NavbarBrand as={Link} to="/">
        <FaTruck className="text-white text-3xl mr-2" />

        <span className="text-2xl font-bold text-white">E Cart</span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} to="/wishlist" className="text-white">
          <div className="flex items-center gap-2">
            <FaHeart className="text-red-400 text-xl" />

            <span className="font-bold">Wishlist</span>

            <span className="bg-white text-purple-700 font-bold rounded-full px-2 py-1 text-sm">
              {wishlist.length}
            </span>
          </div>
        </NavbarLink>

        <NavbarLink as={Link} to="/cart" className="text-white">
          <div className="flex items-center gap-2">
            <FaShoppingCart className="text-green-400 text-xl" />

            <span className="font-bold">Cart</span>

            <span className="bg-white text-purple-700 font-bold rounded-full px-2 py-1 text-sm">
              {cart.length}
            </span>
          </div>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
