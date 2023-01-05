import  { useEffect, useState } from 'react'

const useFetchSearch = (service,keyword) =>{

    const[busqueda,setBusqueda]=useState([]);

    const fetchBusqueda=async()=>{

        try{
            const data = await service(keyword);
            setBusqueda(data);
        }catch(error){
            console.log(error);
        }finally{   }
    }
    useEffect(()=>{
        fetchBusqueda();
    },[]);


    return {busqueda}
}
export default useFetchSearch;