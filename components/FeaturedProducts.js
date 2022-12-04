import React from "react";
import {
  FeaturedProductComponent,
  Top,
  Bottom,
} from "../styles/FeaturedProductStyle";
import Card from "../subComponents/Card";

const FeaturedProducts = ({ type, product }) => {
  return (
    <FeaturedProductComponent>
      <Top>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          earum exercitationem dolore? Pariatur est ipsum ipsa excepturi
          corporis tempore veritatis perferendis? Eveniet soluta quasi quia
          corrupti nemo excepturi placeat?
        </p>
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
