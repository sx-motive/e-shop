import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addtobag } from "../redux/bagSlice";
import { toggleBag } from "../redux/togglesSlice";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const [successAdd, setSuccsessAdd] = useState(false);

  const imagesParser = (string) => {
    return string.split(",");
  };

  function AddToBag() {
    return (
      <div
        className="footer"
        onClick={() => {
          setSuccsessAdd((successAdd) => (successAdd = true));
          dispatch(addtobag(item));
          dispatch(toggleBag());
        }}
      >
        <span>В корзину</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2V2ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V3ZM10 10C7.239 10 5 7.314 5 4H7C7 6.566 8.67 8 10 8C11.33 8 13 6.566 13 4H15C15 7.314 12.761 10 10 10Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }

  function GoToBag() {
    return (
      <div className="footer">
        <span>Товар успешно добавлен в корзину!</span>
      </div>
    );
  }

  return (
    <div className="product">
      <h3 className="title">{item.title}</h3>
      <span className="price">{item.price} ₽</span>
      <div className="image">
        {item.image ? (
          <>
            <Image
              className="first"
              src={imagesParser(item.image)[0]}
              alt={item.title}
              width={350}
              height={320}
            />
            {item.image.length > 1 ? (
              <Image
                className="second"
                src={imagesParser(item.image)[1]}
                alt={item.title}
                layout="fill"
              />
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <Image
              className="first"
              src="https://res.cloudinary.com/dnwnhcjfu/image/upload/v1663398773/MPLD3_VW_34FR_watch-45-alum-starlight-nc-8s_VW_34FR_WF_CO_GEO_CA_y5ixau.jpg"
              alt={item.title}
              width={350}
              height={320}
            />
            <Image
              className="second"
              src="https://res.cloudinary.com/dnwnhcjfu/image/upload/v1663398773/ayJPrBxTrNwAwqCXHzWVJZ_deveof.jpg"
              alt={item.title}
              layout="fill"
            />
          </>
        )}
      </div>
      {/* <span className="category">{item.category}</span> */}
      {/* <p className="desc">{item.description}</p> */}
      <>{successAdd ? <GoToBag /> : <AddToBag />}</>
    </div>
  );
}