import { useState,useEffect } from "react";

 const random =()=>{
    const [randomnum,setRandom]=useState(null);
    useEffect(() => {
    setRandom(Math.floor(Math.random() * 19) + 1)
    
      return () => {
      
      }
    }, []);
    return randomnum
    
    
    
    

}
export default random;