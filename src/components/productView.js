import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtobag } from "../redux/bagSlice";
import { toggleBag } from "../redux/togglesSlice";
import { setProductView, clearProductView } from "../redux/productViewSlice";

export default function ProductView() {
  const router = useRouter();

  const dispatch = useDispatch();
  const productView = useSelector((state) => state.productView.value);
  const imagesParser = (string) => {
    return string.split(",");
  };

  useEffect(() => {
    if (productView.isOpen == true) {
      dispatch(clearProductView());
    }
  }, [router.asPath]);

  return (
    <div
      className={`product-view ${productView.isOpen == true ? "opened" : ""}`}
    >
      <div className="col image-01">
        {productView.data.image ? (
          <Image
            className="first"
            src={imagesParser(productView.data.image)[0]}
            alt={productView.data.title}
            layout="fill"
          />
        ) : (
          <Image
            className="first"
            src="/images/placeholder.png"
            alt={productView.data.title}
            layout="fill"
          />
        )}
      </div>
      <div className="col image-02">
        {productView.data.image ? (
          <>
            {imagesParser(productView.data.image).length > 1 ? (
              <Image
                className="second"
                src={imagesParser(productView.data.image)[1]}
                alt={productView.data.title}
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
            alt={productView.data.title}
            layout="fill"
          />
        )}
      </div>
      <div className="col meta">
        <div className="box">
          <h5>{productView.data.category}</h5>
          <h2 className="title">{productView.data.title}</h2>
          <span className="price">{productView.data.price} ₽</span>
        </div>
        <div className="box">
          <h5>Описание</h5>
          <p className="desc">{productView.data.description}</p>
        </div>

        <div className="box">
          <div className="back" onClick={() => dispatch(clearProductView())}>
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
    </div>
  );
}
