import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";


const getTopTv = async ()=>{
    const res = await TMDB.api(TMDB.path.series.top_rated);
    return movieAdapter(res.data.results)
};

export default getTopTv;