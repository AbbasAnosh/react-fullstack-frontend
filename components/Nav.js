import React from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Link from "next/link";
import { NavStyles } from "../styles/NavStyles";
import { NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
const { AnimatePresence } = require("framer-motion");

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <NavStyles>
      <Link href={"/"}>
        <h2>TARGET</h2>
      </Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
          <RiShoppingBag2Fill />
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
};

export default Nav;
