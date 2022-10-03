import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/product";

export default function Watches() {
  const data = useSelector((state) => state.data.value);

  return (
    <main className="category watches">
      <section className="banner">
        <div className="title">
          <h1>
            Смарт-часы <span></span>{" "}
          </h1>
          <p>Смарт-часы из Китая, безупречного качества</p>
        </div>
      </section>
      <section className="content">
        {data.map((product) => {
          if (product.category == "Смарт-часы") {
            return <Product key={product.id} item={product} />;
          } else {
            return;
          }
        })}
      </section>
    </main>
  );
}
