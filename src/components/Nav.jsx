import React from "react";
import { useSelector } from "react-redux";

const Nav = ({ setShowCart, showCart }) => {

  const cart = useSelector(function (state) {
    return state?.cart?.cart;
  });

  let cartCount = 0

  Object.keys(cart || {}).forEach((key) => {
    const data = cart[key]
    cartCount = cartCount + data.count
  })

  return (
    <header className=" w-full h-10 flex items-center justify-between bg-white rounded-md text-black px-2">
      <main>RTK</main>
      {!showCart ? (
        <button
          onClick={() => setShowCart(true)}
          className="px-2 py-1 rounded-md bg-black text-white cursor-pointer"
        >
          Cart : {cartCount}
        </button>
      ) : (
        <button
          onClick={() => setShowCart(false)}
          className="px-2 py-1 rounded-md bg-black text-white cursor-pointer"
        >
          Home
        </button>
      )}
    </header>
  );
};

export default Nav;
