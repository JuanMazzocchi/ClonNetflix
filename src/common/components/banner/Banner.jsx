import React from 'react'
import useFetch from '../../hooks/useFetch';
import getPopularMovies from '../../../features/movies/services/getPopularMovies'
import { BannerContainer, ButtonBannerMoreInfo, ButtonBannerPlay, ContainerTitle, ImageContainer, PuntuacionContainer, PuntuacionH3} from './styles/BannerContainer';
import random from '../../adapters/ramdom';
import netflix from "../../../assets/transparent-red-font-text-logo-line-download-netflix-png-icon-picture-for-free-6389315daf18171a43a4.5130568615717560551076 (1).png"
import info from "../../../assets/info.png"
import MovieLogos from '../../../features/movies/logos/MovieLogos';
const Banner = () => {
   

const {data,error,isLoading}=useFetch(getPopularMovies);
const aleatorio =  random()
// console.log(aleatorio)

return (
        <BannerContainer        
        image={data[aleatorio]?.backdrop} 
        > 
        <ContainerTitle>
        <p style={{fontSize:"3rem", color:"white"}}><img src= {netflix} width="30px"></img>Pelicula</p>
        {/* <ImageContainer>
          <MovieLogos id={data[aleatorio]?.id}></MovieLogos>
        <img src="https://images.fanart.tv/fanart/black-adam-5f45116491b36.png" alt="black" width="70%"/>
        </ImageContainer> */}
        
        
        <p style={{color:"white",fontSize:"5rem",marginBottom:"2rem"}}>{data[ aleatorio]?.name}</p> 
         <h3><p style={{color:"white",fontSize:"2vh",marginBottom:"2rem"}}><i>{data[ aleatorio]?.description}</i></p></h3>
         <ButtonBannerPlay> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15px"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> Reproducir</ButtonBannerPlay><ButtonBannerMoreInfo><img src={info} alt="" width="12%"/> Mas Informacion</ButtonBannerMoreInfo>
         
        </ContainerTitle>
       <PuntuacionContainer>
        <PuntuacionH3>Puntuacion: {data[ aleatorio]?.rating}</PuntuacionH3>
       </PuntuacionContainer>
        
        

        </BannerContainer>
        
       
         
         
        
        

        
        
    
    
    
  
  )
}

export default Banner