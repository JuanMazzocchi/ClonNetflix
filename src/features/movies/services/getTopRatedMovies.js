 
import { TMDB } from "../../../config/tmdb";

const getTopRatedMovies = async ( )=>{
      
    const res =  await TMDB.api(TMDB.path.movies.top_rated);
    return(res.data.results);
}
export default getTopRatedMovies;