import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../store/slices/togglesSlice";
import { CloseIcon, LogoIcon } from "./icons";

export default function Menu() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.toggle.value.isMenuOpen);
  const dis = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? "open" : "close"}`}>
      <CloseIcon action={dis} />
      <LogoIcon />
      <ul className="menu">
        <li
          onClick={() => dispatch(toggleMenu())}
          className={router.asPath == "/" ? "active" : ""}
        >
          <Link href="/">
            <a className="menu-link">Главная</a>
          </Link>
        </li>
        <li
          onClick={() => dispatch(toggleMenu())}
          className={router.asPath == "/shop" ? "active" : ""}
        >
          <Link href="/shop">
            <a className="menu-link">Все товары</a>
          </Link>
        </li>
        <li
          onClick={() => dispatch(toggleMenu())}
          className={router.asPath == "/shop/watches" ? "active" : ""}
        >
          <Link href="/shop/watches">
            <a className="menu-link">Смарт-часы</a>
          </Link>
        </li>
        <li
          onClick={() => dispatch(toggleMenu())}
          className={router.asPath == "/shop/headphones" ? "active" : ""}
        >
          <Link href="/shop/headphones">
            <a className="menu-link">Наушники</a>
          </Link>
        </li>
        <li
          onClick={() => dispatch(toggleMenu())}
          className={router.asPath == "/shop/accessories" ? "active" : ""}
        >
          <Link href="/shop/accessories">
            <a className="menu-link">Аксессуары</a>
          </Link>
        </li>
      </ul>
      <ul className="menu-footer">
        <li onClick={() => dispatch(toggleMenu())}>
          <Link href="/privacy-policy">
            <a>Политика обработки данных</a>
          </Link>
        </li>
        <li onClick={() => dispatch(toggleMenu())}>
          <Link href="https://t.me/sxmotive">
            <a>Разработка и продвижение сайта Denis Kunitsyn</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
