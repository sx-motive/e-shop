import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Product from '../../components/product';
import Sidebar from '../../components/sidebar';

export default function Headphones() {
  const data = useSelector((state) => state.data.value);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCategory(data.filter((item) => item.category == 'Наушники'));
    data.length > 0 ? setLoading(false) : '';
  }, [data]);

  return (
    <>
      <Head>
        <title>Db Store - Наушники из Китая безупречного качества.</title>
      </Head>

      <section className='banner'>
        <div className='title'>
          <h1>
            Наушники <span>({category.length})</span>
          </h1>
          <p>Наушники из Китая, безупречного качества</p>
        </div>
        <Image
          className='banner-image'
          src='/images/bg-headphones.webp'
          alt='Наушники'
          layout='fill'
          quality={100}
          priority
        />
      </section>
      <section className='sidebar-section'>
        <Sidebar />
      </section>
      <section className='content'>
        <div className='catalog-wrap'>
          {loading == true ? (
            <span className='loading'>Загрузка...</span>
          ) : (
            category.map((product) => {
              return <Product key={product.id} item={product} />;
            })
          )}
        </div>
      </section>
    </>
  );
}
