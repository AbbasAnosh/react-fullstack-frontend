import React from "react";
import {
  FeaturedProductComponent,
  Top,
  Bottom,
} from "../styles/FeaturedProductStyle";
import Card from "../subComponents/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Girls T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Men T-Shirt",
      isNew: false,
      oldPrice: 40,
      price: 32,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Women T-Shirt",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Boys T-shirt",
      isNew: false,
      oldPrice: 34,
      price: 15,
    },
  ];
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Bottom>
    </FeaturedProductComponent>
  );
};

export default FeaturedProducts;
