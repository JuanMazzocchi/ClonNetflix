import axios from "axios"

import { ENV } from "../../../environment/environment"

const getMovieCredits = async (id) => {
    // console.log(id,"id desde getMovieCredits")
    if (id!=undefined){
        let url = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+ENV.API_KEY+"&language=en-US"
        const res =await axios(url)
        return (res.data)  
    }else{return (error)}
    
    }
  


export default getMovieCredits