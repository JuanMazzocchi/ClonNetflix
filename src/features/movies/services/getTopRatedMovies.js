 
import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";

const getTopRatedMovies = async ( )=>{
      
    const res =  await TMDB.api(TMDB.path.movies.top_rated);
    return movieAdapter(res.data.results);
}
export default getTopRatedMovies;