import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";
import { useRouter } from "next/router";

// import { dataLocal } from "../../localdata";

import Header from "./header";
import Footer from "./footer";
import Bag from "./bag";

export default function Layout({ children }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const getAllData = async () => {
      const res = await fetch(`${URL}/products`);
      const arrData = await res.json();
      dispatch(setData(arrData));
      console.log("Data fetched!");
    };
    getAllData();
    // dispatch(setData(dataLocal));
  }, []);

  return (
    <>
      {router.pathname == "/checkout" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <Bag />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
