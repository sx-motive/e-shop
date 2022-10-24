import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addtobag } from '../store/slices/bagSlice';
import { toggleBag } from '../store/slices/togglesSlice';
import { setProductView } from '../store/slices/productViewSlice';
import { BagIcon, PlusIcon } from './icons';

export default function Product({ item }) {
  const dispatch = useDispatch();
  const [successAdd, setSuccsessAdd] = useState(false);

  const imagesParser = (string) => {
    return string.split(',');
  };

  function AddToBag() {
    return (
      <div
        className='footer'
        onClick={() => {
          setSuccsessAdd((successAdd) => (successAdd = true));
          dispatch(addtobag(item));
          dispatch(toggleBag());
        }}
      >
        <span>В корзину</span>
        <span className='icon-bag-wrap'>
          <PlusIcon />
          <BagIcon />
        </span>
      </div>
    );
  }

  function GoToBag() {
    return (
      <div className='footer'>
        <span>Товар успешно добавлен в корзину!</span>
      </div>
    );
  }

  return (
    <>
      <div className='product'>
        <h3 className='title'>{item.title}</h3>
        <span className='price'>{item.price} ₽</span>
        <div className='image' onClick={() => dispatch(setProductView(item))}>
          {item.image ? (
            <>
              <div className='main-image-wrap'>
                <Image
                  className='first'
                  src={imagesParser(item.image)[0]}
                  alt={item.title}
                  layout='fill'
                />
              </div>
              {imagesParser(item.image).length > 1 ? (
                <div className='second-image-wrap'>
                  <Image
                    className='second'
                    src={imagesParser(item.image)[1]}
                    alt={item.title}
                    layout='fill'
                  />
                </div>
              ) : (
                ''
              )}
            </>
          ) : (
            <>
              <div className='main-image-wrap'>
                <Image
                  className='first'
                  src='/images/placeholder.png'
                  alt={item.title}
                  layout='fill'
                />
              </div>
              <Image
                className='second'
                src='/images/placeholder.png'
                alt={item.title}
                layout='fill'
              />
            </>
          )}
        </div>
        {/* <span className="category">{item.category}</span> */}
        {/* <p className="desc">{item.description}</p> */}
        <>{successAdd ? <GoToBag /> : <AddToBag />}</>
      </div>
    </>
  );
}
