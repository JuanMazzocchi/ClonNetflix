import  {  useState } from 'react'


const useModal =()=>{

    const [showModal,setShowmodal]=useState(false);
    const openModal =()=>{ 
        setShowmodal(true)
    };
    const closeModal=()=>{
        setShowmodal(false);
    };
return {showModal,openModal,closeModal,setShowmodal}
};
export default useModal;