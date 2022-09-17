import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/product";

export default function Watches() {
  const data = useSelector((state) => state.data.value);
  return (
    <main className="watches">
      <section className="banner">
        <div className="title">
          <h1>
            Смарт-часы <span>({data.length})</span>
          </h1>
          <p>Смарт-часы из Китая, безупречного качества</p>
        </div>
      </section>
      <section className="content">
        {data.map((product) => {
          return <Product key={product.id} item={product} />;
        })}
      </section>
    </main>
  );
}
