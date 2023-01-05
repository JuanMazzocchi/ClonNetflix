import React from 'react'
import Banner from '../common/components/banner/BannerMovies'
import Nav from '../common/components/Nav/Nav'
import CarouselMultiuso from '../features/movies/Carousel/CarouselMultiuso'
import servicios from '../utils/servicios'
const Layout = () => {
  return (
     <>
     <Nav />
     <Banner />
     <CarouselMultiuso service={servicios.getPopularMovies}
                        titulo={"Peliculas Populares"}/>

    <CarouselMultiuso service={servicios.getTopRatedMovies}
                        titulo={"Peliculas Mejor Rankeadas"}/>
    <CarouselMultiuso service={servicios.getPopularTv}
                        titulo={"Series Populares"}/>
                         
    <CarouselMultiuso service={servicios.getTopTv}
                        titulo={"Series Mejor Rankeadas"}/>
    </>
  )
}

export default Layout