import React, { useEffect } from 'react'
import { useContext } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { AuthContext } from '../../../../features/auth/AuthContext';
import CarouselSlides from '../../../../features/movies/Carousel/CarouselSlides';
import { sliderMyListProps } from '../../../../features/movies/Carousel/props/sliderProps';
import { CarouselContainer } from '../../../../features/movies/Carousel/styles/CarouselContainer';

const MyListCarrousel = () => {
    const {Mylist,createList} =useContext(AuthContext);
    useEffect(() => {
        // console.log("creando lista")
        createList()
     }, []);

  return (
    <>
    <CarouselContainer>
    <h4 style={{padding:"1rem"}}>Mi Lista</h4>

       <Swiper
       {...sliderMyListProps}
       className="mySwiper"
       >


        {Mylist?.map((item)=>{
            return(
                <SwiperSlide key={item.id}>
                    <CarouselSlides item={item}/>

                </SwiperSlide>

            )
        })}
       </Swiper>
       </CarouselContainer>
       </>)
}

export default MyListCarrousel