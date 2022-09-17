import React, { useState, useEffect } from "react";
import SteinStore from "stein-js-client";
import Link from "next/link";
import { useSelector } from "react-redux";

const URL = process.env.NEXT_PUBLIC_URL;
const store = new SteinStore(URL);

export default function Checkout() {
  const bag = useSelector((state) => state.bag.value);
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function pushOrder() {
    let bagOrder = bag.items.map((item) => {
      return {
        title: item.title,
        qty: item.qty,
      };
    });
    store
      .append("orders", [
        {
          id: Math.floor(Date.now() * Math.random()),
          date: new Date().toISOString().substr(0, 19),
          client: client.name,
          email: client.email,
          phone: client.phone,
          total: `${bag.total} Р`,
          order: JSON.stringify(bagOrder),
        },
      ])
      .then((res) => console.log(res));
    console.log("ORDER HAS BEEN PUSHED!!!");
  }

  return (
    <main className="checkout">
      <div className="container">
        <div className="left">
          <Link href="/">
            <a className="logo">Apple store</a>
          </Link>
          <span className="title">Контактная информация</span>
          <input
            value={client.name}
            type="text"
            placeholder="Имя и Фамилия"
            onChange={handleChange}
            name="name"
          />
          <input
            value={client.email}
            type="email"
            placeholder="Эл. почта"
            onChange={handleChange}
            name="email"
          />
          <input
            value={client.phone}
            type="tel"
            placeholder="Контактный номер"
            onChange={handleChange}
            name="phone"
          />

          <span className="title">Адрес доставки</span>

          <select value={client.country} onChange={handleChange} name="country">
            <option value="russia">Россия</option>
            <option value="kazahstan">Казахстан</option>
          </select>
          <input
            value={client.city}
            type="text"
            placeholder="Город"
            onChange={handleChange}
            name="city"
          />
          <input
            value={client.adress}
            type="text"
            placeholder="Улица, номер дома, номер квартиры"
            onChange={handleChange}
            name="adress"
          />
        </div>
        <div className="right">
          <div className="list">
            {bag.items.map((product) => {
              return (
                <div className="product-item" key={product.id}>
                  <span className="title">{product.title}</span>
                  <span className="qty">{product.qty}</span>
                </div>
              );
            })}
          </div>
          <span className="total">Сумма товаров: {bag.total}</span>
          <button onClick={pushOrder}>Оформить заказ</button>
        </div>
      </div>
      <div className="bg"></div>
    </main>
  );
}
