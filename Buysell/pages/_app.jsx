import Head from "next/head";
import Store from "../src/globalState/store";

import "../styles/globals.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Buy Sell Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store>
        <Component {...pageProps} />
      </Store>
    </>
  );
}

export default MyApp;
