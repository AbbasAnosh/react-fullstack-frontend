import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increase = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decrease = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);

    setTotalQuantities((prevTotal) => prevTotal + quantity);

    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product) => {
    setTotalPrice((prevTotal) => prevTotal - product.price);

    setTotalQuantities((prevTotal) => prevTotal - 1);

    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <ShopContext.Provider
      value={{
        quantity,
        increase,
        decrease,
        cartItems,
        showCart,
        onAdd,
        setShowCart,
        onRemove,
        totalQuantities,
        totalPrice,
        setQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(ShopContext);
