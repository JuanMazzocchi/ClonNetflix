 
import { TMDB } from '../../config/tmdb';

const movieAdapter = (movies) => {
  // console.log(movies)

      
  if (movies[0].title !=undefined){ return movies.map((movie)=>{
    return{
    MOVIE:"Movie",
    id:movie.id,
    name:movie.title ,
    description:movie.overview,
    genres:movie.genre_ids,
    date:movie.release_date,
    poster:TMDB.images.poster_high + movie.poster_path,
    backdrop:TMDB.images.backdrop_high + movie.backdrop_path,
    rating:movie.vote_average,
    
    
  };
});}else{return movies.map((movie)=>{
   
  return{
  SERIES:"Serie",
  id:movie.id,
  name:movie.name,
  description:movie.overview,
  genres:movie.genre_ids,
  date:movie.first_air_date,
  poster:TMDB.images.poster_high + movie.poster_path,
  backdrop:TMDB.images.backdrop_high + movie.backdrop_path,
  rating:movie.vote_average,
  
};
});

}
 
};
export default movieAdapter;