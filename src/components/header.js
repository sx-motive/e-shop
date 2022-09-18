import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../redux/inputSlice";
import { setFilter } from "../redux/filterSlice";
import { toggleBag } from "../redux/togglesSlice";

export default function Header() {
  const data = useSelector((state) => state.data.value);
  const input = useSelector((state) => state.input.value);
  const filter = useSelector((state) => state.filter.value);
  const bag = useSelector((state) => state.bag.value);
  const isBagOpen = useSelector((state) => state.toggle.value.isBagOpen);
  const [bagItemsQty, setBagItemsQty] = useState(0);
  const [headerSticky, setHeaderSticky] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

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
    window.addEventListener("scroll", () => fixedHeader());
    const fixedHeader = () => {
      window.pageYOffset >= 400
        ? setHeaderSticky((headerSticky = true))
        : setHeaderSticky((headerSticky = false));
      console.log(headerSticky);
    };
  }, []);

  return (
    <header className={`header ${headerSticky == false ? "" : "sticky"}`}>
      <Link href="/">
        <a className="logo">Apple Store</a>
      </Link>
      <ul className="main-menu">
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a className="menu-link">Главная</a>
          </Link>
        </li>
        <li className={router.pathname == "/watches" ? "active" : ""}>
          <Link href="/">
            <a className="menu-link">Смарт-часы</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="menu-link">Наушники</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="menu-link">Аксессуары</a>
          </Link>
        </li>
      </ul>
      <div className="header-right-bar">
        {/* <div className="search-wrap">
          <input
            type="text"
            placeholder="Поиск по товарам"
            onChange={(e) => searchItems(e.target.value)}
          />
          <span className="line"></span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6714 18.0942L15.8949 14.3287C17.1134 12.7764 17.7745 10.8595 17.7721 8.88603C17.7721 7.12854 17.2509 5.41052 16.2745 3.94922C15.2981 2.48792 13.9103 1.34897 12.2866 0.676412C10.6629 0.00385015 8.87617 -0.172123 7.15245 0.170746C5.42873 0.513616 3.84539 1.35993 2.60266 2.60266C1.35993 3.84539 0.513616 5.42873 0.170746 7.15245C-0.172123 8.87617 0.00385015 10.6629 0.676412 12.2866C1.34897 13.9103 2.48792 15.2981 3.94922 16.2745C5.41052 17.2509 7.12854 17.7721 8.88603 17.7721C10.8595 17.7745 12.7764 17.1134 14.3287 15.8949L18.0942 19.6714C18.1974 19.7755 18.3203 19.8582 18.4556 19.9146C18.591 19.971 18.7362 20 18.8828 20C19.0294 20 19.1746 19.971 19.31 19.9146C19.4453 19.8582 19.5682 19.7755 19.6714 19.6714C19.7755 19.5682 19.8582 19.4453 19.9146 19.31C19.971 19.1746 20 19.0294 20 18.8828C20 18.7362 19.971 18.591 19.9146 18.4556C19.8582 18.3203 19.7755 18.1974 19.6714 18.0942V18.0942ZM2.22151 8.88603C2.22151 7.56791 2.61238 6.2794 3.34468 5.18342C4.07699 4.08745 5.11785 3.23324 6.33563 2.72882C7.55341 2.22439 8.89342 2.09241 10.1862 2.34957C11.479 2.60672 12.6665 3.24145 13.5986 4.1735C14.5306 5.10555 15.1653 6.29306 15.4225 7.58585C15.6796 8.87864 15.5477 10.2186 15.0432 11.4364C14.5388 12.6542 13.6846 13.6951 12.5886 14.4274C11.4927 15.1597 10.2041 15.5505 8.88603 15.5505C7.11849 15.5505 5.42334 14.8484 4.1735 13.5986C2.92366 12.3487 2.22151 10.6536 2.22151 8.88603Z"
              fill="white"
            />
          </svg>
        </div> */}
        <div className="bag-wrap">
          <svg
            className="bag-icon"
            onClick={() => dispatch(toggleBag())}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2V2ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V3ZM10 10C7.239 10 5 7.314 5 4H7C7 6.566 8.67 8 10 8C11.33 8 13 6.566 13 4H15C15 7.314 12.761 10 10 10Z"
            />
          </svg>
          <span className="bag-qty">{bagItemsQty}</span>
        </div>
      </div>
    </header>
  );
}
