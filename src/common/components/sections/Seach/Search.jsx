import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getSearchKeyword from '../../../../features/movies/services/getSearchKeyword';
import getSearchKeywordTv from '../../../../features/movies/services/getSearchKeywordTv';
import useFetchSearch from '../../../hooks/useFetchSearch';
import useFetchSearchTv from '../../../hooks/useFetchSearchTv';
import SearchCards from './SearchCards';

const Search = ( ) => {
    const{keyword}=useParams();
    const{busquedaTv}=useFetchSearchTv(getSearchKeywordTv,keyword);
    const{busqueda}=useFetchSearch(getSearchKeyword,keyword)
         
    
  return (<>
  <div style={{backgroundColor:"rgba(20,20,20)",color:"white", paddingTop:"5rem", minHeight:"800px"}}>
    <h1 style={{marginLeft:"30px", paddingTop:"20px"}}>Resultados de la busqueda : <b>{keyword}</b></h1>
    <div style={{display:"flex", flexWrap:"wrap", backgroundColor:"rgba(20,20,20)",justifyContent:"space-around"}}>
        <SearchCards busqueda={busqueda} tipo={"Peliculas"} key="Peliculas"/>
        <SearchCards busqueda={busquedaTv} tipo={"Series"} key="Series"/>
    </div> 
  </div>
  </>)
}

export default Search