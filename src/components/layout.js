import React, { useEffect } from "react";
import btoa from "btoa";
import { useDispatch } from "react-redux";
import { setData } from "../store/slices/dataSlice";
import { useRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";
import Bag from "./bag";
import Menu from "./menu";

const URL = process.env.NEXT_PUBLIC_URL;
const AUTHUSER = process.env.NEXT_PUBLIC_AUTH_USER;
const AUTHPASS = process.env.NEXT_PUBLIC_AUTH_PASS;

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const getAllData = async () => {
    const auth = AUTHUSER + ":" + AUTHPASS;
    const res = await fetch(`${URL}products`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(auth)}`,
      },
    });
    const arrData = await res.json();
    dispatch(setData(arrData));
    console.log("Data resived!");
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {router.pathname == "/checkout" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
          <Menu />
          <Bag />
        </>
      )}
    </>
  );
}
