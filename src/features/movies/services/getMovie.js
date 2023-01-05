import axios from "axios";
 
import { ENV } from "../../../environment/environment";


const getMovie = async (id) =>{
    if(id!=undefined){
        let url= "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key="+ENV.API_KEY+"&language=en-US"
   const res =await axios(url) 
 
   return (res.data.results )  
    }else{return}
}
export default getMovie;