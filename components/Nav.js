import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Link from "next/link";
import { NavStyles } from "../styles/NavStyles";
import { NavItems, Category } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";
const { AnimatePresence, motion } = require("framer-motion");

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();

  return (
    <NavStyles>
      <Link href={"/"}>
        <h2>TARGET</h2>
      </Link>
      <Category>
        <Link href={"/"}>
          <p>Men</p>
        </Link>
        <Link href={"/"}>
          <p>Women</p>
        </Link>
        <Link href={"/"}>
          <p>Children</p>
        </Link>
      </Category>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <RiShoppingCart2Fill />
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
};

export default Nav;
