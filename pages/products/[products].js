import React, { useState } from "react";
import {
  Products,
  LeftPart,
  RightPart,
  FilterItem,
  InputItem,
} from "../../styles/ProductsStyle";
import List from "../../subComponents/List";
import { useRouter } from "next/router";

const ProductsDetials = () => {
  const [maxprice, setMaxprice] = useState(1000);
  const [sort, setSort] = useState(null);
  const router = useRouter();
  const { id } = parseInt(router.query.id);

  return (
    <Products>
      <LeftPart>
        <FilterItem>
          <h2>Product Categories</h2>
          <InputItem>
            <input type="checkbox" id="1" value={1} />
            <lable htmlFor="1">shoes</lable>
          </InputItem>
          <InputItem>
            <input type="checkbox" id="2" value={2} />
            <lable htmlFor="2">T-Shirts</lable>
          </InputItem>
          <InputItem>
            <input type="checkbox" id="3" value={3} />
            <lable htmlFor="3">Hats</lable>
          </InputItem>
          <InputItem>
            <input type="checkbox" id="4" value={4} />
            <lable htmlFor="4">Bags</lable>
          </InputItem>
        </FilterItem>
        <FilterItem>
          <h2>Filter by Price</h2>
          <div>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxprice(e.target.value)}
            />
            <span>{maxprice}</span>
          </div>
        </FilterItem>
        <FilterItem>
          <h2>Sort by</h2>
          <InputItem>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <lable htmlFor="asc">Price (Lowest first)</lable>
          </InputItem>
          <InputItem>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <lable htmlFor="desc">Price (Highest first)</lable>
          </InputItem>
        </FilterItem>
      </LeftPart>

      <RightPart>
        <img
          src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="newImage"
        />

        <List id={id} maxprice={maxprice} sort={sort} />
      </RightPart>
    </Products>
  );
};

export default ProductsDetials;
