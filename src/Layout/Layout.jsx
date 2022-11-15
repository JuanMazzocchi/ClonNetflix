import React from 'react'
import Banner from '../common/components/banner/Banner'
import Nav from '../common/components/Nav/Nav'
import CarouselMovieTopRated from '../features/movies/Carousel/Carousel'
import CarouselPopular from '../features/movies/Carousel/CarouselPopular'
import CarouselTvPopular from '../features/series/CarouselTv/CarouselTvPopular'
import CarouselTvTop from '../features/series/CarouselTv/CarouselTvTop'

const Layout = () => {
  return (
     <>
     <Nav />
     <div style={{height:"5.01rem"}}></div>
     <Banner />
     <CarouselPopular />
     <CarouselMovieTopRated />
     <CarouselTvPopular />
     <CarouselTvTop />

     
     </>
  )
}

export default Layout