import React from 'react';
import '../App.css';
import products from '../data/product';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewProduct = () => {
  return (
    <>
      <div className="newArrival">
        <h1><span>{products.length}</span> New Arrivals</h1>
        <p>Just dropped and yours to explore.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // responsive design
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product">
              <div className="productImage">
                <div className="label">
                  <h3>{product.label}</h3>
                </div>
                <div>
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="description">
                <p>{product.brand}</p>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='btn-container'>
        <button>SHOP ALL NEW ARRIVALS</button>
      </div>
      
    </> 
  );
};

export default NewProduct;
