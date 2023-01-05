import axios from "axios";
import movieAdapter from "../../../common/adapters/movieadapter";
import { ENV } from "../../../environment/environment";

const getSearchKeyword = async (keyword) =>{
    // console.log(keyword, "desde getSearchKeyword");

    let urlMovie ="https://api.themoviedb.org/3/search/movie?api_key="+ENV.API_KEY+"&language=en-US&page=1&query="+keyword+"&include_adult=false"
    const res = await axios(urlMovie);
 
    return movieAdapter(res.data.results)
            

}

export default getSearchKeyword;