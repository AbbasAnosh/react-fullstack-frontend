import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({
  isClient: !isServerSide,
});

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
