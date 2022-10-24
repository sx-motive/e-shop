import Image from 'next/image';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearProductView } from '../store/slices/productViewSlice';
import { addtobag } from '../store/slices/bagSlice';
import { toggleBag } from '../store/slices/togglesSlice';
import { CloseIcon } from './icons';

export default function ProductModal() {
  const data = useSelector((state) => state.productView.value);
  const dispatch = useDispatch();
  const product = data.data;
  const imagesParser = (string) => {
    return string.split(',');
  };
  return (
    <div
      onClick={() => console.log(data)}
      className={`product-modal ${data.isOpen ? 'view' : ''}`}
    >
      <div className='col image-1'>
        <div className='img-wrap'>
          {product.image ? (
            <Image
              className='first'
              src={imagesParser(product.image)[0]}
              alt={product.title}
              layout='fill'
            />
          ) : (
            <Image
              className='first'
              src='/images/placeholder.png'
              alt={product.title}
              layout='fill'
            />
          )}
        </div>
      </div>
      <div className='col image-2'>
        <div className='img-wrap'>
          {product.image ? (
            <Image
              className='first'
              src={imagesParser(product.image)[1]}
              alt={product.title}
              layout='fill'
            />
          ) : (
            <Image
              className='first'
              src='/images/placeholder.png'
              alt={product.title}
              layout='fill'
            />
          )}
        </div>
      </div>
      <div className='col meta'>
        <span className='subtitle'>{product.category}</span>
        <h2 className='title'>{product.title}</h2>
        <span className='price'>{product.price} ₽</span>
        <span className='subtitle'>Описание</span>
        <p className='desc'>{product.description}</p>
        <div
          className='btn'
          onClick={() => {
            dispatch(clearProductView());
            dispatch(addtobag(product));
            dispatch(toggleBag());
          }}
        >
          Добавить в корзину
        </div>
        <span className='close' onClick={() => dispatch(clearProductView())}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}
