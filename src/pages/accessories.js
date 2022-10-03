import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/product";

export default function Accessories() {
  const data = useSelector((state) => state.data.value);

  return (
    <main className="category accessories">
      <section className="banner">
        <div className="title">
          <h1>
            Аксессуары <span></span>{" "}
          </h1>
          <p>Аксессуары из Китая, безупречного качества</p>
        </div>
      </section>
      <section className="content">
        {data.map((product) => {
          if (product.category == "Аксессуары") {
            return <Product key={product.id} item={product} />;
          } else {
            return;
          }
        })}
      </section>
    </main>
  );
}
