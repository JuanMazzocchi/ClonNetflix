import React from 'react'
import { PopUpBackgroundImage, PopUpInner, PopUpButtonAddToMyList, PopUpButtonRemoveFromList } from './styles/PopUpMovieStyles'
import netflix from "../../../assets/transparent-red-font-text-logo-line-download-netflix-png-icon-picture-for-free-6389315daf18171a43a4.5130568615717560551076 (1).png";
import { ButtonBannerPlay } from '../../../common/components/banner/styles/BannerContainer';
import getMovieCredits from '../services/getMovieCredits';
import Prueba from '../../../prueba/Prueba';
import useFetchCredits from '../../../common/hooks/useFetchCredits';
import getTvCredits from '../services/getTvCredits';
import { generos } from './utils/generos';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import useModal from '../../../common/hooks/useModal';

const PopUpMovies = (item) => {

    // const {openModal,closeModal,showModal}=useModal();
    const {addToList,removeFromList}=useContext(AuthContext)
    const navigate=useNavigate();
    if (item?.item.MOVIE!=undefined){
      var servicio = getMovieCredits;}
    else{
        var servicio =getTvCredits;}

   const {credits}=useFetchCredits(servicio,item.item.id)
     

    const GoToTrailer= (item)=>{
        if (item.item.SERIES!="Serie"){
             navigate(`/movie/${item.item.id}`)}
        else{
            navigate(`/serie/${item.item.id}`)};
        };
    
    
     
    
  return (
     <PopUpInner display={"flex"}>
         
         <>
         
         <PopUpBackgroundImage image={item?.item.backdrop}>
           <div style={{display:"flex", justifyContent:"space-between" }}>
             <div style={{flexDirection:"row", display:"flex", alignItems:"flex-end"}}><img src= {netflix} width="60px" height="50px" />{item?.item.MOVIE ==="Movie" ? ( <h1>Pelicula</h1>): (<h1>Serie</h1>)}</div> 
             {/* <div style={{border:"2px solid white",borderRadius:"25px",paddingTop:"5px",paddingLeft:"7px", width:"30px",height:"30px" }} onClick={()=>{closeModal()}}><b>X</b></div> */}
           </div>
            
           <div>
           
            <h1 style={{padding:"20px", alignSelf:"flex-end" }}>{item?.item.name}</h1> 
            <ButtonBannerPlay>
                <span onClick={()=>{GoToTrailer(item)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15px"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg> Reproducir</span>
             </ButtonBannerPlay>
             <div className='tooltip'><PopUpButtonAddToMyList onClick={()=>{addToList(item.item)}} ><b>+</b></PopUpButtonAddToMyList><span className='tooltiptext'>Agregar a mi Lista</span></div>
             <div className='tooltip'><PopUpButtonRemoveFromList onClick={()=>{removeFromList(item.item)}}><b>-</b></PopUpButtonRemoveFromList><span className='tooltiptext'>Quitar de mi Lista</span></div>
           </div> 
        </PopUpBackgroundImage>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
        <div style={{width:"70%", padding:"20px",fontSize:"small" }} >{item?.item.description} 
            <div style={{marginTop:"10px"}}>
                <p style={{color:"lightgray"}}>Fecha de Lanzamiento: </p><p>{item?.item.date}</p>
            </div>
        </div>
        <div style={{marginTop:"10px"}} > <p style={{color:"lightgray"}}>Generos:</p><p>{generos(item)} </p> 
       
       <Prueba data={credits}/>
       </div>
       </div>
        
         
         
        
     </>
     </PopUpInner>
  )
}

export default PopUpMovies;






 