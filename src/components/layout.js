import React, { useState } from "react";

import Header from "./header";
import Footer from "./footer";
import Bag from "./bag";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Bag />
      {children}
      <Footer />
    </>
  );
}
