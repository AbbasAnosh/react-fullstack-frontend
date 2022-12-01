import React, { useState } from "react";
import {
  Product,
  LeftSection,
  RightSection,
  Images,
  MainImage,
  Quantity,
  Link,
  Item,
  Info,
  Detail,
  Button,
} from "../../styles/SingleProductStyle";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";

const SingleProduct = () => {
  const images = [
    "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <Product>
      <LeftSection>
        <Images>
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImage(2)} />
        </Images>
        <MainImage>
          <img src={images[selectedImage]} alt="" />
        </MainImage>
      </LeftSection>
      <RightSection>
        <h1>Title</h1>
        <span className="price">$999</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ut
          nesciunt repellat sunt dolore. Ipsum eius quae tempora explicabo
          tempore.
        </p>
        <Quantity>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>

          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </Quantity>
        <Button>
          <MdOutlineAddShoppingCart />
          ADD TO CART
        </Button>

        <Link>
          <Item>
            <BsHeart />
            ADD TO WISHLIST
          </Item>
          <Item>
            <IoIosGitCompare />
            ADD TO COMPARE
          </Item>
        </Link>

        <Info>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </Info>
        <hr />
        <Detail>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </Detail>
      </RightSection>
    </Product>
  );
};

export default SingleProduct;
