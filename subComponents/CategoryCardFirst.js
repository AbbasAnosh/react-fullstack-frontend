import Link from "next/link";
import React from "react";

import {
  CardComponent,
  NewImage,
  Price,
  FirstImage,
  SecondImage,
} from "../styles/CategoryFirstStyle";

const CategoryCardFirst = ({ item }) => {
  return (
    <Link href={`/products/${products}`}>
      <CardComponent>
        <NewImage>
          {item.isNew && <span>New Product</span>}
          <FirstImage src={item.img1} alt={item.title} />
          <SecondImage src={item.img2} alt={item.title} className="secondimg" />
        </NewImage>

        <h2>{item.title}</h2>
        <Price>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </Price>
      </CardComponent>
    </Link>
  );
};

export default CategoryCardFirst;
