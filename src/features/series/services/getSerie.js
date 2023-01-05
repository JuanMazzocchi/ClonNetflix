import axios from 'axios'
 
import { ENV } from '../../../environment/environment'
const getSerie = async (id) => {

    if(id!=undefined){
        // console.log(id,"id desde getSerie")
       let url= "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key="+ENV.API_KEY+"&language=en-US"


      const res = await axios(url) 
 
   return (res.data.results )  
    }else{return}

   

};

export default getSerie;