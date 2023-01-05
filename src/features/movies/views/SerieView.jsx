import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import useFetchOne from '../../../common/hooks/useFetchOne';
import getSerie from '../../series/services/getSerie';
 
import { youtubeOptions } from './youtubeOptions/youtubeOptions';

const SerieView = () => {
    
    const {id}=useParams();
    const{dataPeli}=useFetchOne(getSerie,id);
    let trailer="0"
    for (let index = 0; index < dataPeli?.length; index++) {
        if (dataPeli[index].name.indexOf("Trailer")!=-1){
           trailer=index
        }
        else{
          continue
        };
    };   
  return (
    <YouTube videoId={dataPeli[trailer]?.key} opts={youtubeOptions}/>
  )
}

export default SerieView