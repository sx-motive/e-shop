import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleBag } from "../redux/togglesSlice";
import { addtobag, lessbag, removebag } from "../redux/bagSlice";

export default function Bag() {
  const bag = useSelector((state) => state.bag.value);
  const isBagOpen = useSelector((state) => state.toggle.value.isBagOpen);
  const [bagItemsQty, setBagItemsQty] = useState(0);
  const dispatch = useDispatch();

  const imagesParser = (string) => {
    return string.split(",");
  };

  useEffect(() => {
    const bagQty = () => {
      let arrQty = [];
      arrQty = bag.items.map((item) => {
        return item.qty;
      });
      setBagItemsQty((prev) => (prev = arrQty.reduce((a, b) => a + b, 0)));
    };
    bagQty();
  }, [bag.items]);

  return (
    <>
      <div className={`bag ${isBagOpen ? "open" : "close"}`}>
        <div className="left">
          <div className="bag-header">
            <span className="title">
              Мои товары <span className="total-qty">({bagItemsQty})</span>
            </span>
            <svg
              onClick={() => dispatch(toggleBag())}
              className="bag-close"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.442 5.44257L5.44179 19.4414L4.55786 18.5576L18.558 4.55873L19.442 5.44257Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.558 19.4411L4.55786 5.44225L5.44179 4.55841L19.442 18.5572L18.558 19.4411Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <div className="bag-products">
            {bag.items.map((item) => (
              <div key={item.id} className="bag-product">
                <div className="bag-product-image">
                  {item.image ? (
                    <Image
                      className="first"
                      src={imagesParser(item.image)[0]}
                      alt={item.title}
                      layout="fill"
                    />
                  ) : (
                    <>
                      <Image
                        className="first"
                        src="/images/placeholder.png"
                        alt={item.title}
                        width={90}
                        height={84}
                      />
                    </>
                  )}
                </div>
                <div className="bag-product-info-wrap">
                  <div className="bag-product-box-first">
                    <span className="bag-product-title">{item.title}</span>
                    <span className="bag-product-category">
                      {item.category}
                    </span>
                    <span className="bag-product-qty">
                      <span
                        onClick={() => dispatch(lessbag(item))}
                        className="less"
                      >
                        -
                      </span>
                      {item.qty}
                      <span
                        onClick={() => dispatch(addtobag(item))}
                        className="more"
                      >
                        +
                      </span>
                    </span>
                  </div>
                </div>
                <div className="bag-product-box-second">
                  <span className="bag-product-price">{item.price} Р</span>
                  <span
                    onClick={() => dispatch(removebag(item))}
                    className="bag-product-remove"
                  >
                    Удалить
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bag-footer">
            <div className="bag-total">
              <span className="total-title">Сумма товаров</span>{" "}
              <span className="total-sum">{bag.total} Р</span>
            </div>
            <Link href="/checkout">
              <a onClick={() => dispatch(toggleBag())} className="bag-checkout">
                Перейти к оформлению
              </a>
            </Link>
            <span className="bag-notice">
              Доставка и скидки будут посчитаны на странице оформления.
            </span>
          </div>
        </div>
        <div className="right">
          <span className="copyright">fdhsfghgf gfjh dfgjdgf</span>
        </div>
      </div>
      <div
        className={`bag-bg ${isBagOpen ? "open" : "close"}`}
        onClick={() => dispatch(toggleBag())}
      ></div>
    </>
  );
}
