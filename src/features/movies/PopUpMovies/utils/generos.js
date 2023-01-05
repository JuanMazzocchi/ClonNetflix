import { genres } from "../../../../utils/genresMoviesId";
export const generos =(item)=>{
    let acumulador=[] 
  if (item?.item.genres.length >0) {
      for (let index = 0; index < item?.item.genres.length; index++) {
          const element = item?.item.genres[index];
          acumulador.push("  "+ genres[element]+ "  ");
       };
  }else{
      console.log("sin generos")
  };
  return acumulador;
}