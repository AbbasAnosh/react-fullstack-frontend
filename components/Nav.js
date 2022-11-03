import React from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Link from "next/link";
import { NavStyles } from "../styles/NavStyles";
import { NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

const Nav = () => {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyles>
      <Link href={"/"}>
        <h2>TARGET</h2>
      </Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <RiShoppingBag2Fill />
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
};

export default Nav;
