import React from 'react'
import CarouselMultiuso from '../../../../features/movies/Carousel/CarouselMultiuso'
import BannerSeries from '../../banner/BannerSeries'
import Nav from '../../Nav/Nav'
import servicios from '../../../../utils/servicios'

const SectionSeries = () => {
  return (<>   
        <Nav />
        <BannerSeries />
        <CarouselMultiuso service={servicios.getPopularTv}
                          titulo={"Series Populares"}/>
        <CarouselMultiuso service={servicios.getTopTv}
                          titulo={"Series Top"}/>
 </>
  )
}

export default SectionSeries