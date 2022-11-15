import axios from 'axios';
import  { useEffect, useState } from 'react'
 

const useFetch = (service) => {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState();
     

    const fetchData= async ()=>{
       setIsLoading(true);
       
       try {
        const data = await service();
        
        console.log(data, "data desde fetchData")
        setData(data)
       } catch (error) {
        console.log(error)
        setError(error)
       }
       finally{
        setIsLoading(false);
       }
    };

    useEffect(()=>{
      fetchData();   
    },[]);
    return {data,error,isLoading}
}


export default useFetch