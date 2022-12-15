import React from "react";
import { useQuery } from "urql";
import { GET_WOMEN_PRODUCTS } from "../lib/query";
import { client, ssrCache } from "../lib/urqlClient";
import { NewGalleryProducts } from "../styles/NewGalleryProducts";
import WomenProducts from "../subComponents/WomenProducts";

const women = () => {
  const [results] = useQuery({ query: GET_WOMEN_PRODUCTS });
  const { data, fetching, error } = results;
  const products = data.products.data;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  return (
    <NewGalleryProducts>
      {products.map((product) => (
        <WomenProducts product={product} />
      ))}
    </NewGalleryProducts>
  );
};

export default women;

export async function getServerSideProps() {
  await client.query(GET_WOMEN_PRODUCTS).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
}
