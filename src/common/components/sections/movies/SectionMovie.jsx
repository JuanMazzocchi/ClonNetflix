import React from 'react'
import CarouselMultiuso from '../../../../features/movies/Carousel/CarouselMultiuso'
import Banner from '../../banner/BannerMovies'
import Nav from '../../Nav/Nav'
import servicios from '../../../../utils/servicios'
 
const SectionMovie = () => {
  return (<>
            <Nav />
            <Banner />
            <CarouselMultiuso  service={servicios.getPopularMovies}
                                titulo={"Peliculas Populares"}/>
            <CarouselMultiuso service={servicios.getTopRatedMovies}
                                titulo={"Peliculas mejores rankeadas"} />
  </>)
}

export default SectionMovie