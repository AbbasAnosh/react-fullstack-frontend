import Link from "next/link";
import React from "react";
import { useStateContext } from "../lib/context";

import {
  CardComponent,
  Image,
  Price,
  FirstImage,
  SecondImage,
  Wrapper,
  Buttons,
  Content,
} from "../styles/CardProductStyle";
import toast from "react-hot-toast";

const Card = ({ item }) => {
  const { onAdd, quantity } = useStateContext();
  const { title, price, image, image2 } = item.attributes;
  const { setShowCart } = useStateContext();
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
    <Link href="/products">
      <CardComponent>
        <Wrapper>
          <Image>
            {item.isNew && <span>New Product</span>}
            <FirstImage src={image.data.attributes.formats.small.url} alt="" />
            <SecondImage
              src={image2.data.attributes.formats.small.url}
              alt=""
              className="secondimg"
            />
          </Image>
          <Content>
            <h2>{title}</h2>
            <Price>
              <h3>${price + 20}</h3>
              <h3>${price}</h3>
            </Price>

            <Buttons>
              <button className="firstButton" onClick={() => setShowCart(true)}>
                Buy Now
              </button>
              <button
                className="secondButton"
                onClick={() => {
                  onAdd(item.attributes, quantity), notify();
                }}
              >
                Add to Cart
              </button>
            </Buttons>
          </Content>
        </Wrapper>
      </CardComponent>
    </Link>
  );
};

export default Card;
