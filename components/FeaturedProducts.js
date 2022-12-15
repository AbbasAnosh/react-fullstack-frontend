import React from "react";
import {
  FeaturedProductComponent,
  Top,
  Bottom,
} from "../styles/FeaturedProductStyle";
import Card from "../subComponents/Card";
import { HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

const FeaturedProducts = ({ type, product }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/products");
  };
  return (
    <FeaturedProductComponent>
      <Top>
        <h1>{type} products</h1>
        <button onClick={handleClick}>
          View More <HiArrowRight />
        </button>
      </Top>
      <Bottom>
        {product?.map(
          (item) =>
            item.attributes.type === type && (
              <Card item={item} key={item.attributes.slug} />
            )
        )}
      </Bottom>
    </FeaturedProductComponent>
  );
};

export default FeaturedProducts;
