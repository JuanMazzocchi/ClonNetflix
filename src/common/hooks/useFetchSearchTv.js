import  { useEffect, useState } from 'react'

const useFetchSearchTv = (service,keyword) =>{
    const[busquedaTv,setBusquedaTv]=useState([]);
    const fetchBusquedaTv=async()=>{
        try{
            const data = await service(keyword);
            setBusquedaTv(data);
        }catch(error){
            console.log(error);
        }finally{   }
    }
    useEffect(()=>{
        fetchBusquedaTv();
    },[]);
    return {busquedaTv}
};
export default useFetchSearchTv;