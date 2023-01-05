import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../features/auth/AuthContext'
import AvatarOptions from '../Nav/AvatarOptions'
import { AvatarOptionsContainer } from '../Nav/styles/NavStyle'
import imagenesAvatar from './imagenesAvatar'
const Avatar = () => {
    const{avatar}=useContext(AuthContext)
    // console.log(imagenesAvatar.juano.title);
    const[display,setDisplay]=useState("none")
    const mostrar =()=>{
        setDisplay("flex");
    };
    const ocultar=()=>{
        setDisplay("none")
    }

    if (avatar === imagenesAvatar.juano.title){
         return (<><img src={imagenesAvatar.juano.path}width="32px"  style={{borderRadius:"5px"}}  onClick={()=>{mostrar()}} /> 
         <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
         </>)
    } else if (avatar === imagenesAvatar.nuri.title){
        return (<>  
            <img src={imagenesAvatar.nuri.path} width="32px" style={{borderRadius:"5px" }} onClick={()=>{mostrar()}}   />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer></>) 
    }else if (avatar === imagenesAvatar.vicky.title){
        return (<>
            <img src={imagenesAvatar.vicky.path} width="32px" style={{borderRadius:"5px"}}  onClick={()=>{mostrar()}} />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
 </>) 
    }else if (avatar === imagenesAvatar.santi.title){
        return (<>
            <img src={imagenesAvatar.santi.path} width="32px" style={{borderRadius:"5px"}}  onClick={()=>{mostrar()}} />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
</>) 
    }else if (avatar === imagenesAvatar.martin.title){
        return (<>
            <img src={imagenesAvatar.martin.path}width="32px" style={{borderRadius:"5px"}}  onClick={()=>{mostrar()}}  />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
</>)
    }else{
        return <p>nada</p>
    }


  
}

export default Avatar