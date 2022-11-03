import React from "react";
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

const ProductDetails = () => {
  const { query } = useRouter();
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = result;
  const { quantity, increase, decrease, onAdd } = useStateContext();

  if (fetching) return <p>...Loading</p>;
  if (error) return <p>{error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={increase}>
            <AiFillPlusCircle />
          </button>
          <p>{quantity}</p>
          <button onClick={decrease}>
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, quantity)}>
          Add to Cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
