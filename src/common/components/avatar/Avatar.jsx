import React, { useState } from 'react' 
import AvatarOptions from '../Nav/AvatarOptions'
import { AvatarOptionsContainer } from '../Nav/styles/NavStyle'
import imagenesAvatar from './imagenesAvatar'
const Avatar = () => {
    const avatars = JSON.parse(localStorage.getItem("avatar"))
    const avatar =avatars.avatarName
    
    const[display,setDisplayContainer]=useState("none")
    const[displayAvatar,setDisplayAvatar]=useState("block")
    const mostrar =()=>{
        setDisplayContainer("flex");
        setDisplayAvatar("none");
    };
    const ocultar=()=>{
        setDisplayContainer("none");
        setDisplayAvatar("block")
    }

    if (avatar === imagenesAvatar.juano.title){
         return (<><img src={imagenesAvatar.juano.path}width="32px"  style={{borderRadius:"5px", display:displayAvatar}}  onClick={()=>{mostrar()}} /> 
         <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
         </>)
    } else if (avatar === imagenesAvatar.nuri.title){
        return (<>  
            <img src={imagenesAvatar.nuri.path} width="32px" style={{borderRadius:"5px", display:displayAvatar} } onClick={()=>{mostrar()}}   />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer></>) 
    }else if (avatar === imagenesAvatar.vicky.title){
        return (<>
            <img src={imagenesAvatar.vicky.path} width="32px" style={{borderRadius:"5px" , display:displayAvatar}}  onClick={()=>{mostrar()}} />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
 </>) 
    }else if (avatar === imagenesAvatar.santi.title){
        return (<>
            <img src={imagenesAvatar.santi.path} width="32px" style={{borderRadius:"5px" , display:displayAvatar}} onClick={()=>{mostrar()}} />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
</>) 
    }else if (avatar === imagenesAvatar.martin.title){
        return (<>
            <img src={imagenesAvatar.martin.path}width="32px" style={{borderRadius:"5px" , display:displayAvatar}}  onClick={()=>{mostrar()}}  />
            <AvatarOptionsContainer display={display} onMouseLeave={()=>{ocultar()}} ><AvatarOptions /></AvatarOptionsContainer>
</>)
    }else{
        return <p>nada</p>
    }


  
}

export default Avatar