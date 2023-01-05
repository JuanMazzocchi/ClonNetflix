 
import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";


const getPopularMovies = async ( )=>{
      
    const res =  await TMDB.api(TMDB.path.movies.popular);
    // console.log("data sin adaptar desde PopularMovies")
    // console.log(res.data.results[0])
    return movieAdapter(res.data.results)
}
export default getPopularMovies;