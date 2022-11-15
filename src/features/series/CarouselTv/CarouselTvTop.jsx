import React from 'react'
import useFetch from '../../../common/hooks/useFetch'
import { CarouselContainer } from '../../movies/Carousel/styles/CarouselContainer'
import getPopularTv from '../services/getPopularTv'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import getTopTv from '../services/getTopTv';
import { CardContainer } from '../../../common/styledComponents/CardContainer';
const CarouselTvTop = () => {

const {data}=useFetch(getTopTv)
    
  return (
   <CarouselContainer>
    <h4 style={{padding:"1rem",zIndex:"0"}}>Top ranking de series</h4>
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

  {/* <CarouselSlides data={data} /> */}
     <SwiperSlide><CardContainer><img className="poster" src={data[0]?.poster} alt="poster" key={data[0]?.id} width="90%" /></CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[1]?.poster} alt="poster" key={data[1]?.id}  width="90%"/></CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[2]?.poster} alt="poster" key={data[2]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[3]?.poster} alt="poster" key={data[3]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[4]?.poster} alt="poster" key={data[4]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[5]?.poster} alt="poster" key={data[5]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[6]?.poster} alt="poster" key={data[6]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[7]?.poster} alt="poster" key={data[7]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[8]?.poster} alt="poster" key={data[8]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[9]?.poster} alt="poster" key={data[9]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[10]?.poster} alt="poster" key={data[10]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[11]?.poster} alt="poster" key={data[11]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[12]?.poster} alt="poster" key={data[12]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[13]?.poster} alt="poster" key={data[13]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[14]?.poster} alt="poster" key={data[14]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[15]?.poster} alt="poster" key={data[15]?.id} width="90%"/> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[16]?.poster} alt="poster" key={data[16]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[17]?.poster} alt="poster" key={data[17]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[18]?.poster} alt="poster" key={data[18]?.id}width="90%" /> </CardContainer></SwiperSlide>
     <SwiperSlide><CardContainer><img className="poster" src={data[19]?.poster} alt="poster" key={data[19]?.id}width="90%" /> </CardContainer></SwiperSlide> 
     
  </Swiper>




   </CarouselContainer>
  )
}

export default CarouselTvTop