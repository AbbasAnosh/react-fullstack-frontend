import React from "react";
import { Gallery } from "../styles/Gallery";
import Product from "../components/Product";

const List = ({ products, maxprice, sort, subCate }) => {
  return (
    <Gallery>
      {products?.map((product) => (
        <Product
          key={product.attributes.slug}
          product={product}
          maxprice={maxprice}
          sort={sort}
          subCate={subCate}
        />
      ))}
    </Gallery>
  );
};

export default List;
