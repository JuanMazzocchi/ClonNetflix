import axios from "axios";
import movieAdapter from "../../../common/adapters/movieadapter";
import { ENV } from "../../../environment/environment";

const getSearchKeywordTv = async(keyword) => {
    let urlSerie="https://api.themoviedb.org/3/search/tv?api_key="+ENV.API_KEY+"&language=en-US&page=1&query="+keyword+"&include_adult=false"
    const res =await axios(urlSerie);
    return movieAdapter(res.data.results)
};

export default getSearchKeywordTv;