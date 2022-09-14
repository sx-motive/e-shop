import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Bag() {
  const bag = useSelector((state) => state.bag.value);
  const [bagTotal, setBagTotal] = useState(0);

  function sumTotal() {
    let newBag = [];
    newBag = bag.map((product) => {
      let price;
      price = product.price.replace(/\s+/g, "");
      return parseInt(price) * product.qty;
    });

    setBagTotal((prev) => (prev = newBag.reduce((a, b) => a + b, 0)));
  }

  function sum(price, qty) {
    price = price.replace(/\s+/g, "");
    return parseInt(price) * qty;
  }

  useEffect(() => {
    sumTotal();
  }, [bag]);
  return (
    <>
      <div className="bag-wrapper">
        <span className="bag-title">Корзина товаров</span>
        {bag.map((item, index) => (
          <div key={index + item.title + item.id} className="product-wrap">
            <div className="product-img">
              <Image
                src={item.image ? item.image : "/images/apple-watch.jpg"}
                alt={item.title}
                layout="fill"
              />
            </div>
            <span className="product-title">{item.title}</span>
            <span className="product-price">{sum(item.price, item.qty)} Р</span>
            <span className="product-qty"> {item.qty}шт.</span>
          </div>
        ))}
        <div className="bag-total">
          Сумма товаров:
          <span>{bagTotal}</span>
        </div>
      </div>
    </>
  );
}
