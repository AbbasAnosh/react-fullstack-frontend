import React from "react";
import Link from "next/link";
import { RelatedItemContent, Content } from "../styles/RecommendedSliderStyle";

const RecommendedCart = ({ item }) => {
  const { title, price, image, slug } = item.attributes;
  return (
    <RelatedItemContent>
      <Content>
        <Link href={`/product/${slug}`}>
          <div>
            <img src={image.data.attributes.formats.thumbnail.url} alt="" />
          </div>
        </Link>
        <h4>{title}</h4>
        <h4>{price}</h4>
      </Content>
    </RelatedItemContent>
  );
};

export default RecommendedCart;
