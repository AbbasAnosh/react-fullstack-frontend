import "../styles/globals.css";
import { Provider } from "urql";
import { client, ssrCache } from "../lib/urqlClient";
import Nav from "../components/Nav";
import StateContext from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
