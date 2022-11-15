import movieAdapter from "../../../common/adapters/movieadapter";
import { TMDB } from "../../../config/tmdb";


const getPopularTv = async ()=>{
    const res = await TMDB.api(TMDB.path.series.popular);
    return movieAdapter(res.data.results)
};

export default getPopularTv;