import React, { useEffect, useState } from 'react'

const useFetchCredits = (service,id) => {
    const [credits,setCredits]=useState([])

    const fetchCredit = async()=>{
        try {
            const respuesta = await service(id);
            setCredits(respuesta)
        }catch(error){
            console.log(error)
        }finally{}
    }
    useEffect(()=>{
        fetchCredit();
    },[]);

  return {credits}
};

export default useFetchCredits;