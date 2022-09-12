import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../redux/inputSlice";
import { setFilter } from "../redux/filterSlice";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const data = useSelector((state) => state.data.value);
  const input = useSelector((state) => state.input.value);
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const searchItems = (text) => {
    dispatch(setInput(text));
    if (input !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      dispatch(setFilter(filteredData));
    } else {
      dispatch(setFilter(data));
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <a className="logo">Logo</a>
        </Link>
        <ul className="header-menu">
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/">Категории</Link>
          </li>
          <li>
            <Link href="/">О магазине</Link>
          </li>
          <li>
            <Link href="/">Контакты</Link>
          </li>
        </ul>

        <input
          type="text"
          placeholder="Поиск по товарам..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <div className="header-icons">
          <Image
            src="/icons/bag-outline.svg"
            alt="Корзина"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}
