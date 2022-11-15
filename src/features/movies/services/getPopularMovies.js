 
import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";


const getPopularMovies = async ( )=>{
      
    const res =  await TMDB.api(TMDB.path.movies.popular);
    console.log(res.data.results)
    return movieAdapter(res.data.results)
}
export default getPopularMovies;