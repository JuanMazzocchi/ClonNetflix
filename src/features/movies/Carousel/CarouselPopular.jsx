import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import useFetch from '../../../common/hooks/useFetch';
import getPopularMovies from '../services/getPopularMovies';
import CarouselSlides from './CarouselSlides';
import getTopRatedMovies from '../services/getTopRatedMovies';
import { CarouselContainer } from './styles/CarouselContainer';
import { CardContainer } from '../../../common/styledComponents/CardContainer';
 
 

const CarouselPopular = () => {
 
 
  const {data}=useFetch(getPopularMovies);

 
  
  return (
    <>
    <CarouselContainer>
    <h4 style={{padding:"1rem"}}>Peliculas mas populares</h4>
    <Swiper
    slidesPerView={8}
    spaceBetween={1}
    slidesPerGroup={4}
    loop={true}
    loopFillGroupWithBlank={true}
    // pagination={{
    //   clickable: true,
    // }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  > 

 
     <SwiperSlide><CardContainer><img src={data[0]?.poster} alt="poster" key={data[0]?.id} width="90%" /></CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[1]?.poster} alt="poster" key={data[1]?.id}  width="90%"/></CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[2]?.poster} alt="poster" key={data[2]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[3]?.poster} alt="poster" key={data[3]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[4]?.poster} alt="poster" key={data[4]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[5]?.poster} alt="poster" key={data[5]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[6]?.poster} alt="poster" key={data[6]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[7]?.poster} alt="poster" key={data[7]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[8]?.poster} alt="poster" key={data[8]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[9]?.poster} alt="poster" key={data[9]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[10]?.poster} alt="poster" key={data[10]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[11]?.poster} alt="poster" key={data[11]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[12]?.poster} alt="poster" key={data[12]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[13]?.poster} alt="poster" key={data[13]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[14]?.poster} alt="poster" key={data[14]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[15]?.poster} alt="poster" key={data[15]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[16]?.poster} alt="poster" key={data[16]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[17]?.poster} alt="poster" key={data[17]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[18]?.poster} alt="poster" key={data[18]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img src={data[19]?.poster} alt="poster" key={data[19]?.id}width="90%" /> </CardContainer></SwiperSlide> 
     
  </Swiper>
  {/* <CarouselSlides service={getPopularMovies}/> */}
  </CarouselContainer>
  </>
  )
}

export default CarouselPopular