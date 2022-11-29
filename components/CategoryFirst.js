import React from "react";
import {
  CategoryBody,
  ImageComponent,
  CategoryImage,
  CategoryContent,
} from "../styles/CategoryFirstStyle";
import CategoryCardFirst from "../subComponents/CategoryCardFirst";

const CategoryFirst = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1532572396497-1eafcca6066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R5bGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Girls T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0eWxpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1548454782-15b189d129ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R5bGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Men T-Shirt",
      isNew: false,
      oldPrice: 40,
      price: 32,
    },
  ];
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
        <ImageComponent>
          {data.map((item) => (
            <CategoryCardFirst item={item} />
          ))}
        </ImageComponent>
      </CategoryContent>
    </CategoryBody>
  );
};

export default CategoryFirst;
