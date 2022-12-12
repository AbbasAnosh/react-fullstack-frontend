import React from "react";
import { Gallery } from "../styles/Gallery";
import Product from "../components/Product";

const List = ({ products, maxprice, sort }) => {
  return (
    <Gallery>
      {products?.map((product) => (
        <Product
          key={product.attributes.slug}
          product={product}
          maxprice={maxprice}
          sort={sort}
        />
      ))}
    </Gallery>
  );
};

export default List;
