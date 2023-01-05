import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonBannerPlay } from '../../banner/styles/BannerContainer';
import { SearchCardCardContainer } from './styles/styles'

const SearchCards = (busqueda) => {
    const navigate = useNavigate();
    // console.log(busqueda)
     
    const GoToTrailer =(item)=>{
        if (item.SERIES!="Serie"){ navigate(`/movie/${item.id}`)}
        else
        {
         navigate(`/serie/${item.id}`)
        };
        }; 
 
    return(<>{busqueda?.busqueda.length!=0 ? (<>
    {busqueda?.busqueda.map((item)=>{
 
        return(<>
            <SearchCardCardContainer key={item.id}  >
                <h3 style={{paddingBottom:"10px", fontFamily:"monospace"}}>{item.title ? item.title : item.name}</h3>
                <h4>Fecha de Emision : {item?.date}</h4> 
                {item.backdrop.length<= 36 ? <div style={{width:"100%"}}><p ><b>No hay Fotos Disponibles</b></p></div> : <img src={item.backdrop} width="80%" />}
                <ButtonBannerPlay onClick={()=>{GoToTrailer(item)}}>Reproducir</ButtonBannerPlay>


            </SearchCardCardContainer>
             
           
        </>)
    })}</>)
    :(<><h1>No hay Coincidencias en la Busqueda de {busqueda.tipo} </h1></>)}
    
    
    </>)
     
}

export default SearchCards