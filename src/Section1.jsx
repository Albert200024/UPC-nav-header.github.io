import './Section1.css';
import './App.css'
import Section1SliderItem from './Section1SliderItem';

//=============== Import required modules===============//
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useEffect, useState } from 'react';

//=============== Swiper =============== //
// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Section1({items}) {
  return (
    <div className='section1'>
      <Swiper
          speed={1500}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Section1SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}