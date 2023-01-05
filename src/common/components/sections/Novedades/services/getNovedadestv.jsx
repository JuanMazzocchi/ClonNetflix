import { TMDB } from "../../../../../config/tmdb";
import novedadesAdapter from "../../../../adapters/novedadesAdapter";



const getNovedadesTv = async ()=>{
    const res = await TMDB.api(TMDB.path.trending.path.tv.day);
    // console.log(res.data.results)
    return novedadesAdapter(res.data.results);
};

export default getNovedadesTv;

