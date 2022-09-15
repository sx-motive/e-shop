import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Bag() {
  const bag = useSelector((state) => state.bag.value);

  function sum(price, qty) {
    price = price.replace(/\s+/g, "");
    return parseInt(price) * qty;
  }

  return (
    <>
      <div className="bag-wrapper">
        <span className="bag-title">Корзина товаров</span>
        {bag.items.map((item, index) => (
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
          <span>{bag.total}</span>
        </div>
        <Link href="/order">
          <a>Перейти к оформлению</a>
        </Link>
      </div>
    </>
  );
}
