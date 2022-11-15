import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import useFetch from '../../../common/hooks/useFetch'
import getPopularMovies from '../services/getPopularMovies'
import { CardContainer } from '../../../common/styledComponents/CardContainer';
import getTopRatedMovies from '../services/getTopRatedMovies';

 
const CarouselSlides=(service)=>{
  const {data}=useFetch(service);
  
  let cards= data?.map((movie)=>{
            return  <SwiperSlide key={movie?.id}>
              <CardContainer>
                <img src={movie?.poster} alt="poster" key={movie?.id} width="90%" />
              </CardContainer>
                    </SwiperSlide>
             
          })

    return  <Swiper
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
    >{cards}
    </Swiper>

    }

export default CarouselSlides