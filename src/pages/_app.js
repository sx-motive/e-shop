import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { store } from "../store";

import Layout from "../components/layout";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Db Store - Товары из Китая безупречного качества.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
