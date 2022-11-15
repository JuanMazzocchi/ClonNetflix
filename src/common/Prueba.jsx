import axios from 'axios'
import React from 'react'

const Prueba =async (id) => {

    const res= await axios.get("https://api.themoviedb.org/3/review/{436270}?api_key=aa9ae5253f432f685640faa4716ee7f9")
    console.log(res);
  
    return (
    <div>Prueba</div>
  )
}

export default Prueba