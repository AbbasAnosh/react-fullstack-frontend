import React, { useState } from "react";
import { useQuery } from "urql";
import { client, ssrCache } from "../lib/urqlClient";
import { PRODUCT_QUERY } from "../lib/query";
import {
  Products,
  LeftPart,
  RightPart,
  FilterItem,
  InputItem,
} from "../styles/ProductsStyle";
import List from "../subComponents/ListProducts";

const products = () => {
  const [maxprice, setMaxprice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const products = data.products.data;
  const subcategory = data?.subCategories?.data;

  const onhandlechange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;

    setSelectedSubCats(
      ischecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <Products>
      <LeftPart>
        <FilterItem>
          <h2>Product Categories</h2>
          {subcategory.map((item) => (
            <InputItem key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={onhandlechange}
              />
              <lable htmlFor={item.id}>{item.attributes.title}</lable>
            </InputItem>
          ))}
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

        <List
          maxprice={maxprice}
          sort={sort}
          products={products}
          subCate={selectedSubCats}
        />
      </RightPart>
    </Products>
  );
};

export default products;

export async function getServerSideProps() {
  await client.query(PRODUCT_QUERY).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
}
