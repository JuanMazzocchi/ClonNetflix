import axios from "axios";
import { TMDB } from "../../../config/tmdb";

const getPopularMovies = async ( )=>{
      
    const res =  await TMDB.api(TMDB.path.movies.popular);
    return(res.data.results);
}
export default getPopularMovies;