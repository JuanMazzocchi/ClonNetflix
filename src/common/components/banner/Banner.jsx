import React, { useState } from 'react'
import { useEffect } from 'react';
import { ENV } from '../../../environment/environment';
import axios from "axios";
import useFetch from '../../hooks/useFetch';
import getPopularMovies from '../../../features/movies/services/getPopularMovies'

const Banner = () => {
  

//    const url= `https://api.themoviedb.org/3/movie/popular?api_key=${ENV.API_KEY}&language=en-US&page=1`
   
const {data,error,isLoading}=useFetch(getPopularMovies);

 

return (

    <div>Bannerrrrrrrrrrrrrrr</div>
  )
}

export default Banner