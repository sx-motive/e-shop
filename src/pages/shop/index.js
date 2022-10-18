import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Product from "../../components/product";
import Sidebar from "../../components/sidebar";

export default function Shop() {
  const data = useSelector((state) => state.data.value);
  return (
    <>
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
          {data.map((product) => {
            return <Product key={product.id} item={product} />;
          })}
        </div>
      </section>
    </>
  );
}
