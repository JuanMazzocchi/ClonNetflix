import axios from "axios";
import { ENV } from "../environment/environment";

export const TMDB ={
   
   
    api: axios.create({
            baseURL:"https://api.themoviedb.org/3",
            params:{
                api_key:ENV.API_KEY,
            }}),
   
    path:{
        movies:{
            popular:"/movie/popular",
            top_rated:"/movie/top_rated"
        },
        series:{
            popular:"/tv/popular",
            top_rated:"/tv/top_rated",
        }
    }
}


 