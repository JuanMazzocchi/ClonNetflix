import React from 'react'
import CarouselMultiuso from '../../../../features/movies/Carousel/CarouselMultiuso'
 
import Nav from '../../Nav/Nav'
 
import CarouselNumeros from './CarouselNovedades/CarouselNumeros'
import servicios from '../../../../utils/servicios'
const Novedades = () => {
  return (
     <>
     <div style={{paddingTop:"3rem", backgroundColor:"rgba(20,20,20)",zIndex:"5"}}>
     <Nav />
     <CarouselMultiuso service={servicios.getPopularMovies}
                        titulo={"Peliculas Populares"}/>
     <CarouselMultiuso service={servicios.getPopularTv}
                        titulo={"Series Populares"}/>
    <CarouselMultiuso service={servicios.getNovedadesTv}
                        titulo={"Novedades Tv"}/>
    <CarouselMultiuso service={servicios.getNovedadesMovies}
                        titulo={"Novedades Peliculas"}/>
   
     <CarouselNumeros />    {/*  por ahora queda asi, a prueba el modal, cuando funcione hay q implementarlo en el multiuso  */}
     </div>
     
     
     
     </>
  )
}

export default Novedades