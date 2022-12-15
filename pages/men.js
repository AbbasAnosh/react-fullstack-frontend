import React from "react";
import { useQuery } from "urql";
import { GET_MEN_PRODUCTS } from "../lib/query";
import { client, ssrCache } from "../lib/urqlClient";
import MenProducts from "../subComponents/MenProducts";
import { NewGalleryProducts } from "../styles/NewGalleryProducts";

const men = () => {
  const [results] = useQuery({ query: GET_MEN_PRODUCTS });
  const { data, fetching, error } = results;
  const products = data.products.data;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  return (
    <NewGalleryProducts>
      {products.map((product) => (
        <MenProducts product={product} />
      ))}
    </NewGalleryProducts>
  );
};

export default men;

export async function getServerSideProps() {
  await client.query(GET_MEN_PRODUCTS).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
}
