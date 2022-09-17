import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleBag } from "../redux/togglesSlice";

export default function Bag() {
  const bag = useSelector((state) => state.bag.value);
  const isBagOpen = useSelector((state) => state.toggle.value.isBagOpen);

  const dispatch = useDispatch();

  function sum(price, qty) {
    price = price.replace(/\s+/g, "");
    return parseInt(price) * qty;
  }

  return (
    <>
      <div
        className={`bag-bg ${isBagOpen ? "open" : "close"}`}
        onClick={() => dispatch(toggleBag())}
      ></div>
      <div className={`bag-wrapper ${isBagOpen ? "open" : "close"}`}>
        <span className="bag-title">Корзина товаров</span>

        <div className="products-wrapper">
          {bag.items.map((item, index) => (
            <div key={index + item.title + item.id} className="product-wrap">
              <div className="product-img">
                <Image
                  src={item.image ? item.image : "/03.png"}
                  alt={item.title}
                  layout="fill"
                />
              </div>
              <span className="product-title">{item.title}</span>
              <span className="product-price">
                {sum(item.price, item.qty)} Р
              </span>
              <span className="product-qty"> {item.qty}шт.</span>
            </div>
          ))}
        </div>
        <div className="bag-footer">
          <div className="bag-total">
            Сумма товаров: <span>{bag.total} Р</span>
          </div>
          <Link href="/checkout">
            <a onClick={() => dispatch(toggleBag())} className="bag-go-order">
              Перейти к оформлению
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
