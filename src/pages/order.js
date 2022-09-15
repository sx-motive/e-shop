import React, { useState, useEffect } from "react";
import SteinStore from "stein-js-client";
import { useSelector } from "react-redux";

const URL = process.env.NEXT_PUBLIC_URL_PURE;
const store = new SteinStore(URL);

export default function Order() {
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
    <section className="order">
      <div className="container">
        <div className="client-details">
          <div className="form-wrapper">
            <input
              value={client.name}
              type="text"
              placeholder="Ваше имя и фамилия"
              onChange={handleChange}
              name="name"
            />
            <input
              value={client.email}
              type="text"
              placeholder="Эл. почта"
              onChange={handleChange}
              name="email"
            />
            <input
              value={client.phone}
              type="text"
              placeholder="Контактный номер"
              onChange={handleChange}
              name="phone"
            />

            <button onClick={pushOrder}>Оформить заказ</button>
          </div>
        </div>
        <div className="bag-details">
          {bag.items.map((product) => {
            return (
              <div className="product" key={product.id}>
                <span className="title">{product.title}</span>
                <span className="qty">{product.qty}</span>
              </div>
            );
          })}
          <span className="total">Сумма товаров: {bag.total}</span>
        </div>
      </div>
    </section>
  );
}
