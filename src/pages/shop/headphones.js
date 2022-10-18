import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Product from "../../components/product";

export default function Headphones() {
  const data = useSelector((state) => state.data.value);

  return (
    <>
      <Head>
        <title>Db Store - Наушники из Китая безупречного качества.</title>
      </Head>
      <main className="category headphones">
        <section className="banner">
          <div className="title">
            <h1>
              Наушники <span></span>{" "}
            </h1>
            <p>Наушники из Китая, безупречного качества</p>
          </div>
        </section>
        <section className="content">
          {data.map((product) => {
            if (product.category == "Наушники") {
              return <Product key={product.id} item={product} />;
            } else {
              return;
            }
          })}
        </section>
      </main>
    </>
  );
}
