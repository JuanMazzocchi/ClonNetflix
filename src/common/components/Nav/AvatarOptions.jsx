import React from 'react'
import imagenesAvatar from '../avatar/imagenesAvatar'
import pencil from '../../../assets/pngfind.com-pencil-icon-png-776276.png'
import { AvatarOptionsLi, AvatarOptionsSpan } from './styles/NavStyle'
import { useContext } from 'react'
import { AuthContext } from '../../../features/auth/AuthContext'
const AvatarOptions = () => {
  const {logout,selectedAvatar,createList}=useContext(AuthContext);
  
  const avatarChange=(name)=>{
    selectedAvatar(name);
    createList();
  };
   
  return (<>
    
        <ul style={{listStyle:"none",padding:"10px"}}>
            {/* <AvatarOptionsLi>
             <img src={imagenesAvatar.nuri.path} width="32px" style={{borderRadius:"5px" }}/><AvatarOptionsSpan>{imagenesAvatar.nuri.title} </AvatarOptionsSpan>   
            </AvatarOptionsLi> */}
            <AvatarOptionsLi onClick={()=>{avatarChange("Juano")}}>
             <img src={imagenesAvatar.juano.path} width="32px" style={{borderRadius:"5px"}} name="Juano"/><AvatarOptionsSpan>Principal </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi onClick={()=>{avatarChange("Santi")}}>
             <img src={imagenesAvatar.santi.path} width="32px" style={{borderRadius:"5px"}} name="Santi"/><AvatarOptionsSpan>Invitado </AvatarOptionsSpan>
            </AvatarOptionsLi>
            {/* <AvatarOptionsLi>
            <img src={imagenesAvatar.martin.path}width="32px" style={{borderRadius:"5px"}} /><AvatarOptionsSpan>{imagenesAvatar.martin.title} </AvatarOptionsSpan>
            </AvatarOptionsLi> */}
            <AvatarOptionsLi onClick={()=>{avatarChange("Vicky")}}>
            <img src={imagenesAvatar.vicky.path} width="32px" style={{borderRadius:"5px"}} name="Vicky"/><AvatarOptionsSpan>Niños </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi>
            <img src={pencil} alt="pencil" width="10%" /><AvatarOptionsSpan>Administrar Perfiles</AvatarOptionsSpan>
            </AvatarOptionsLi>
            <div style={{backgroundColor:"gray",height:"2px",width:"100%"   }}></div>
            <AvatarOptionsLi>
                <AvatarOptionsSpan onClick={()=>{logout()}}>Cerrar sesion en Netflix</AvatarOptionsSpan>
            </AvatarOptionsLi>
        </ul>
     
  </>)
}

export default AvatarOptions