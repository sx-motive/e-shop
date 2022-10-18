import React, { useState, useEffect } from "react";
import { useRouter, asPath } from "next/router";
import Image from "next/image";
import Head from "next/head";

import { useSelector } from "react-redux";
import Product from "../../components/product";
import Sidebar from "../../components/sidebar";

export default function Shop() {
  const data = useSelector((state) => state.data.value);
  const [loading, setLoading] = useState(true);
  const title = `Db Store - Каталог`;

  useEffect(() => {
    data.length > 0 ? setLoading(false) : "";
  });
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="banner">
        <div className="title">
          <h1>
            Каталог <span>({data.length})</span>{" "}
          </h1>
          <p>Товары из Китая, безупречного качества</p>
        </div>
        <Image className="banner-image" src="/images/bg.webp" layout="fill" />
      </section>
      <section className="sidebar-section">
        <Sidebar />
      </section>
      <section className="content">
        <div className="catalog-wrap">
          {loading == true ? (
            <span className="loading">Загрузка...</span>
          ) : (
            data.map((product) => {
              return <Product key={product.id} item={product} />;
            })
          )}
        </div>
      </section>
    </>
  );
}
