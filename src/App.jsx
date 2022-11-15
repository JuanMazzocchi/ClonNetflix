 import React from 'react';
import Banner from './common/components/banner/Banner';
import CarouselMovieTopRated from './features/movies/Carousel/Carousel';
import Nav from './common/components/Nav/Nav';
 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselPopular from './features/movies/Carousel/CarouselPopular';
import CarouselTvPopular from './features/series/CarouselTv/CarouselTvPopular';
import CarouselTvTop from './features/series/CarouselTv/CarouselTvTop';
import Prueba from './common/Prueba';
import AppRoutes from './routes/AppRoutes';
 
 const App = () => {
   return (
    // <>
    // <Nav />
    // <div style={{height:"5.01rem"}}></div> 
    // <Banner />
    // <CarouselMovieTopRated />
    // <CarouselPopular />
    // <CarouselTvPopular/>
    // <CarouselTvTop />
    // </>

    <AppRoutes />
   )
 }
 
 export default App