import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper'
import './slider.css';
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import {IDishes} from "../../../models/dishes.models";
import {useAppSelector} from "../../../hooks/redux";




const Slider = () => {

    SwiperCore.use([Autoplay, Pagination, Navigation])
    const {dishes} = useAppSelector(state => state.dishes)
    const dishesOfTheDay = [...dishes].sort(() => Math.random() - 0.5).slice(0, 3);

    return (

            <Swiper className='swiper-wrapper'
                    slidesPerView={1}
                    autoplay={{
                        pauseOnMouseEnter: true,
                        delay:1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={100}
            >

                {dishesOfTheDay.map((item: IDishes) =>
                    <SwiperSlide key={item.id}>
                        <div className='card'>
                            <h2>{item.dish.name}</h2>
                            <br/>
                            <div className='imgStyle'>
                                <img src={item.dish.img}/>
                            </div>
                            <br/>
                            <p>{item.dish.description}</p>
                            <br/>
                        </div>
                    </SwiperSlide>
                )}

            </Swiper>

    );
};

export default Slider;