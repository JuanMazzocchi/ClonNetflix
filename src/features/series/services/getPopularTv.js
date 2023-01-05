import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";


const getPopularTv = async ()=>{
    const res = await TMDB.api(TMDB.path.series.popular);
    // console.log("data sin adaptar desde popularTV")
    // console.log(res.data.results[0]);
    return movieAdapter(res.data.results)
};

export default getPopularTv;