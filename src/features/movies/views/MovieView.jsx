import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchOne from '../../../common/hooks/useFetchOne';
import getMovie from '../services/getMovie';
import YouTube from 'react-youtube';
import { youtubeOptions } from './youtubeOptions/youtubeOptions';

const MovieView = () => {
    const {id}=useParams();
    const{dataPeli}=useFetchOne(getMovie,id);
     let trailer="0"
    for (let index = 0; index < dataPeli?.length; index++) {
        if (dataPeli[index].name.indexOf("Trailer")!=-1){
           trailer=index
           break
        }
        else{
          continue
        };

    };   
  return (<>
       
      <YouTube videoId={dataPeli[trailer]?.key} opts={youtubeOptions}/>
      
  </>)
};
export default MovieView;