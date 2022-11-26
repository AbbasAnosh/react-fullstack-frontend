import React from "react";
import {
  CategoryBody,
  Image,
  FirstImage,
  SecondImage,
  CategoryImage,
  CategoryContent,
} from "../styles/CategoryFirstStyle";

const CategoryFirst = () => {
  return (
    <CategoryBody>
      <CategoryImage>
        <img
          src="https://images.ctfassets.net/c9o4jciad99f/H9pqbPnPJ1OcTRoTCOfDd/88ade3b2b768587eb48a11bd89a8cbba/BFCM_Holiday_2up_Evergreen.jpg?w=640&fm=webp"
          alt=""
        />
      </CategoryImage>
      <CategoryContent>
        <h2>Give them our best.</h2>
        <p>FILL YOUR BAG WITH THESE FAN FAVORITES</p>
        <Image>
          <FirstImage>
            <img
              src="https://cdn.shopify.com/s/files/1/0127/2332/products/Swatch_ST3_c241cabe-3895-44d9-918e-db8429fa9a89.jpg?v=1649101793&width=320&format=webp"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0127/2332/products/wanderlust-swatch.jpg?v=1620777882&width=320&format=webp"
              alt=""
            />
          </FirstImage>
          <SecondImage>
            <img
              src="https://cdn.shopify.com/s/files/1/0127/2332/products/wanderlust-swatch.jpg?v=1620777882&width=320&format=webp"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0127/2332/products/LL_smear_nova_1000x_201536b6-ced1-4812-b591-f03e3c41dd04.jpg?v=1631835795&width=320&format=webp"
              alt=""
            />
          </SecondImage>
        </Image>
      </CategoryContent>
    </CategoryBody>
  );
};

export default CategoryFirst;
