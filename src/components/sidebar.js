import React from "react";
import Link from "next/link";
import { PlusIcon } from "./icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="filters">
        <div className="filter-wrap">
          <ul className="filter-items">
            <li>
              <Link href="/shop/watches">
                <a>
                  Смарт-часы <PlusIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/category/headphones">
                <a>
                  Наушники <PlusIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop/accessoaries">
                <a>
                  Аксессуары <PlusIcon />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="order">
        <span>
          Цена по возрастанию <PlusIcon />
        </span>
      </div>
    </div>
  );
}
