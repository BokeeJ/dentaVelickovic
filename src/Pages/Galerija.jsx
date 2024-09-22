import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Galerija() {
    return (
        <div className='flex flex-col m-10'>
            <div className='items-center flex justify-center flex-col m-5'>
                <h1 className='font-roboto font-bold text-2xl '>NEKI OD NAŠIH RADOVA</h1>
                <hr className='border border-black w-[70%] m-2' />

            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <img src="/10.webp" alt='10' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/11.webp" alt='11' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/12.webp" alt='12' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/13.webp" alt='13' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/14.webp" alt='14' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/15.webp" alt='15' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/16.webp" alt='16' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/17.webp" alt='17' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/18.webp" alt='18' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/19.webp" alt='19' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/20.webp" alt='20' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/21.webp" alt='21' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/22.webp" alt='22' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/23.webp" alt='23' />
                    </SwiperSlide>
                </Swiper></div>
        </div>
    );
}
