import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../../common/hooks/useFetch';
import { CarouselContainer } from './styles/CarouselContainer';
import CarouselSlides from './CarouselSlides';
import { sliderProps } from './props/sliderProps';
import PopUpMovies from '../PopUpMovies/PopUpMovies';
import MovieView from '../views/MovieView';
 
const CarouselMultiuso = ({titulo,service}) => {

    const {data}=useFetch(service)
    // console.log(data)   
   //ACA FUNCIONA EL CONSOLE.LOG(DATA)
     
 return (<><CarouselContainer>
            <h4 style={{padding:"1rem"}}>{titulo}</h4>
  <Swiper
   {...sliderProps}
    className="mySwiper"
    >
    {data?.map((item)=>{
      return (
        <SwiperSlide key={item.id}>
          <CarouselSlides item={item}/>
          
        </SwiperSlide>
      );
    })}
  </Swiper>
  </CarouselContainer>
  </>)
}
export default CarouselMultiuso