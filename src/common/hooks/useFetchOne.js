import { useEffect, useState } from "react"

const useFetchOne = (service,id) =>{
    const [dataPeli, setDataPeli]=useState([]);

    const fetchOne =async ()=>{
        try {
            const dataPeli = await service(id);
            // console.log("id desde fetchOne", id)
            setDataPeli(dataPeli)
        }catch (error){
            console.log(error)
        }finally{ }
       
    }
useEffect(()=>{
    fetchOne();
},[]);
return {dataPeli}
};


export default useFetchOne;