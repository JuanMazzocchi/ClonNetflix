import axios from "axios";
import { ENV } from "../../../environment/environment";

 

const getTvCredits = async (id) => {
    if (id!=undefined){
        let url = "https://api.themoviedb.org/3/tv/"+id+"/credits?api_key="+ENV.API_KEY+"&language=en-US"
        const res =await axios(url)
        return (res.data)  
    }else{return (error)}   
  
}

export default getTvCredits