import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store";
import Layout from "../components/layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
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
