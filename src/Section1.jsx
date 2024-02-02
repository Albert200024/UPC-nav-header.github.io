import './Section1.css';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';

export default function Section1() {
    
   

    const handleClassAdded = () => {
      // Assuming you want to go to the next slide when a class is added
      console.log("aheyr")
    };
  return (
    <div className='section1'>
     <Swiper

        speed={1500}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-slider-item-block item1'>
                <div className='swiper-slider-item-block-content'>
                      <h1 className='slider-title animate-slider' onClick={handleClassAdded}>Welcome to Universal Programing Company</h1>
                      <p>The software solutions developed by our company have been
                          numerously awarded for usability and innovative features.</p>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item2'>
                <div className='swiper-slider-item-block-content'>
                      <h1>Welcome to Universal Programing Company</h1>
                      <p>The software solutions developed by our company have been</p>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item1'>
                <div className='swiper-slider-item-block-content'>
                      <h1>Welcome to Universal Programing Company</h1>
                      <p>The software solutions developed by our company have been</p>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slider-item-block item2'>
                <div className='swiper-slider-item-block-content'>
                      <h1>Welcome to Universal Programing Company</h1>
                      <p>The software solutions developed by our company have been</p>
                      <button className='button swiper-slider-item-block-content-btn'>Read more</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}