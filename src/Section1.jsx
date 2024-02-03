import './Section1.css';
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useEffect } from 'react';


export default function Section1() {
    
  useEffect(() => {
    
  }, []); // Run only once when the component mounts


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

        pagination={true}
      
        
   
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-slider-item-block item1'>
                <div className='swiper-slider-item-block-content'>
                      <h1 className=''>Welcome to <span>Universal Programing Company</span></h1>
                      <div className='swiper-slider-item-block-content-text-block'>
                          <p>The software solutions developed by our company have been
                          numerously awarded for usability and innovative features.</p>
                      </div>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item2'>
                <div className='swiper-slider-item-block-content'>
                      <h1>Welcome to <span>Universal Programing Company</span></h1>
                      <div className='swiper-slider-item-block-content-text-block'>
                         <p>The software solutions developed by our company have been</p>
                      </div>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item1'>
                <div className='swiper-slider-item-block-content'>
                     <h1>Welcome to <span>Universal Programing Company</span></h1>
                      <div className='swiper-slider-item-block-content-text-block'>
                        <p>The software solutions developed by our company have been</p>
                      </div>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item2'>
                <div className='swiper-slider-item-block-content'>
                      <h1>Welcome to <span>Universal Programing Company</span></h1>
                      <div className='swiper-slider-item-block-content-text-block'>
                         <p>The software solutions developed by our company have been</p>
                      </div>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}