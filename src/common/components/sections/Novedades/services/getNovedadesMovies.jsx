import { TMDB } from "../../../../../config/tmdb";
import novedadesAdapter from "../../../../adapters/novedadesAdapter";



const getNovedadesMovies= async ()=>{
    const res = await TMDB.api(TMDB.path.trending.path.movie.day);
    // console.log(res.data.results)
    return novedadesAdapter(res.data.results);
};

export default getNovedadesMovies;

