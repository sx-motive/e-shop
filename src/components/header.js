import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../store/slices/inputSlice';
import { setFilter } from '../store/slices/filterSlice';
import { toggleBag, toggleMenu } from '../store/slices/togglesSlice';

import { BagIcon, LogoIcon, SearchIcon, PlusIcon } from './icons';

export default function Header() {
  const data = useSelector((state) => state.data.value);
  const input = useSelector((state) => state.input.value);
  // const filter = useSelector((state) => state.filter.value);
  const bag = useSelector((state) => state.bag.value);
  const [bagItemsQty, setBagItemsQty] = useState(0);
  const [headerSticky, setHeaderSticky] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // const searchItems = (text) => {
  //   dispatch(setInput(text));
  //   if (input !== "") {
  //     const filteredData = data.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(input.toLowerCase());
  //     });
  //     dispatch(setFilter(filteredData));
  //   } else {
  //     dispatch(setFilter(data));
  //   }
  // };

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

  useEffect(() => {
    window.addEventListener('scroll', () => fixedHeader());
    const fixedHeader = () => {
      window.pageYOffset >= 100
        ? setHeaderSticky((headerSticky = true))
        : setHeaderSticky((headerSticky = false));
    };
  }, []);

  const pages = [
    '/',
    '/shop',
    '/shop/headphones',
    '/shop/watches',
    '/shop/accessories',
  ];

  return (
    <header
      className={`header ${
        pages.includes(router.asPath) && headerSticky == false ? 'white' : ''
      } ${headerSticky == false ? '' : 'sticky'}`}
    >
      <span className='menu-ico' onClick={() => dispatch(toggleMenu())}>
        Меню <PlusIcon />
      </span>
      <Link href='/'>
        <a className='logo'>
          <LogoIcon title='Db Store - товары из Китая' />
        </a>
      </Link>
      <ul className='header-menu'>
        <li className={router.asPath == '/' ? 'active' : ''}>
          <Link href='/'>
            <a className='menu-link'>Главная</a>
          </Link>
        </li>
        <li className={router.asPath == '/shop' ? 'active' : ''}>
          <Link href='/shop'>
            <a className='menu-link'>Все товары</a>
          </Link>
        </li>
        <li className={router.asPath == '/shop/watches' ? 'active' : ''}>
          <Link href='/shop/watches'>
            <a className='menu-link'>Смарт-часы</a>
          </Link>
        </li>
        <li className={router.asPath == '/shop/headphones' ? 'active' : ''}>
          <Link href='/shop/headphones'>
            <a className='menu-link'>Наушники</a>
          </Link>
        </li>
        <li className={router.asPath == '/shop/accessories' ? 'active' : ''}>
          <Link href='/shop/accessories'>
            <a className='menu-link'>Аксессуары</a>
          </Link>
        </li>
      </ul>
      <ul className='header-bar'>
        <li className='header-search'>
          <SearchIcon />
          {/* <input
            type="text"
            placeholder="Поиск по товарам"
            onChange={(e) => searchItems(e.target.value)}
          /> */}
        </li>
        <li className='header-bag' onClick={() => dispatch(toggleBag())}>
          <BagIcon />
          <span className='bag-qty'>{bagItemsQty}</span>
        </li>
      </ul>
    </header>
  );
}
