import React, { useEffect } from "react";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { DetailsStyle } from "../../styles/ProductDetails";
import { ProductInfo } from "../../styles/ProductDetails";
import { Quantity } from "../../styles/ProductDetails";
import { Buy } from "../../styles/ProductDetails";

import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";
const { motion } = require("framer-motion");

const ProductDetails = () => {
  useEffect(() => {
    setQuantity(1);
  }, []);

  const { query } = useRouter();
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = result;
  const { quantity, increase, decrease, onAdd, setQuantity } =
    useStateContext();

  if (fetching) return <p>...Loading</p>;
  if (error) return <p>{error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;

  const notify = () => {
    toast.success(`${title} added to your cart!`, {
      icon: "👏",
      style: {
        border: "1px solid #2c546d",
        padding: "16px",
        color: "#2c546d",
      },
      iconTheme: {
        primary: "#2c546d",
        secondary: "#FFFAEE",
      },
    });
  };
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decrease}>
            <AiFillMinusCircle />
          </button>
          <motion.p animate={{ scale: 1 }} initial={{ scale: 0 }}>
            {quantity}
          </motion.p>
          <button onClick={increase}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, quantity), notify();
          }}
        >
          Add to Cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
