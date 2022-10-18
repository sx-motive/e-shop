import React, { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import btoa from "btoa";

import { useDispatch } from "react-redux";
import { addtobag } from "../../store/slices/bagSlice";
import { toggleBag } from "../../store/slices/togglesSlice";

const URL = process.env.NEXT_PUBLIC_URL;
const AUTHUSER = process.env.NEXT_PUBLIC_AUTH_USER;
const AUTHPASS = process.env.NEXT_PUBLIC_AUTH_PASS;

export default function Product({ productData }) {
  useEffect(() => {
    console.log(productData);
  });
  const dispatch = useDispatch();

  const imagesParser = (string) => {
    return string.split(",");
  };

  return (
    <>
      <Head>
        <title>Db Store - {productData.title}.</title>
      </Head>
      <main className="product-page">
        <section className="content">
          <div className="col image-01">
            {productData.image ? (
              <Image
                className="first"
                src={imagesParser(productData.image)[0]}
                alt={productData.title}
                layout="fill"
              />
            ) : (
              <Image
                className="first"
                src="/images/placeholder.png"
                alt={productData.title}
                layout="fill"
              />
            )}
          </div>
          <div className="col image-02">
            {productData.image ? (
              <>
                {imagesParser(productData.image).length > 1 ? (
                  <Image
                    className="second"
                    src={imagesParser(productData.image)[1]}
                    alt={productData.title}
                    layout="fill"
                  />
                ) : (
                  ""
                )}
              </>
            ) : (
              <Image
                className="second"
                src="/images/placeholder.png"
                alt={productData.title}
                layout="fill"
              />
            )}
          </div>
          <div className="col meta">
            <div className="box">
              <h5>{productData.category}</h5>
              <h2 className="title">{productData.title}</h2>
              <span className="price">{productData.price} ₽</span>
            </div>
            <div className="box">
              <h5>Описание</h5>
              <p className="desc">{productData.description}</p>
            </div>

            <div className="box">
              <div
                className="back"
                onClick={() => dispatch(clearProductView())}
              >
                Вернуться назад
              </div>
              <div
                className="add-to-bag"
                onClick={() => {
                  dispatch(addtobag(productView.data));
                  dispatch(toggleBag());
                }}
              >
                <span>Добавить в корзину</span>
              </div>
              <span className="notice">
                Подпишитесь на нашу рассылку и получите купон на скидку в 10% на
                первую покупку.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const auth = AUTHUSER + ":" + AUTHPASS;
  const res = await fetch(`${URL}/products`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(auth)}`,
    },
  });
  const products = await res.json();
  return {
    paths: products.map((item) => {
      const product = item.slug.toString();
      return { params: { product } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const auth = AUTHUSER + ":" + AUTHPASS;
  const product = params.product;
  const res = await fetch(`${URL}/products?search={"slug":"${product}"}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa(auth)}`,
    },
  });
  const data = await res.json();
  return { props: { productData: data[0] } };
}
