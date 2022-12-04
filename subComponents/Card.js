import Link from "next/link";
import React from "react";

import {
  CardComponent,
  Image,
  Price,
  FirstImage,
  SecondImage,
} from "../styles/CardProductStyle";

const Card = ({ item }) => {
  console.log(item);
  const { title, price, image, image2, slug } = item.attributes;

  return (
    <Link href={`/product/${slug}}`}>
      <CardComponent>
        <Image>
          {item.isNew && <span>New Product</span>}
          <FirstImage src={image.data.attributes.formats.small.url} alt="" />
          <SecondImage
            src={image2.data.attributes.formats.small.url}
            alt=""
            className="secondimg"
          />
        </Image>

        <h2>{title}</h2>
        <Price>
          <h3>${price + 20}</h3>
          <h3>${price}</h3>
        </Price>
      </CardComponent>
    </Link>
  );
};

export default Card;
