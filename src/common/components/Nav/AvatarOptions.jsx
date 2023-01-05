import React from 'react'
import imagenesAvatar from '../avatar/imagenesAvatar'
import pencil from '../../../assets/pngfind.com-pencil-icon-png-776276.png'
import { AvatarOptionsLi, AvatarOptionsSpan } from './styles/NavStyle'
const AvatarOptions = () => {
  return (<>
    
        <ul style={{listStyle:"none",padding:"10px"}}>
            <AvatarOptionsLi>
             <img src={imagenesAvatar.nuri.path} width="32px" style={{borderRadius:"5px" }}/><AvatarOptionsSpan>{imagenesAvatar.nuri.title} </AvatarOptionsSpan>   
            </AvatarOptionsLi>
            <AvatarOptionsLi>
             <img src={imagenesAvatar.juano.path} width="32px" style={{borderRadius:"5px"}}/><AvatarOptionsSpan>{imagenesAvatar.juano.title} </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi>
             <img src={imagenesAvatar.santi.path} width="32px" style={{borderRadius:"5px"}}/><AvatarOptionsSpan>{imagenesAvatar.santi.title} </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi>
            <img src={imagenesAvatar.martin.path}width="32px" style={{borderRadius:"5px"}} /><AvatarOptionsSpan>{imagenesAvatar.martin.title} </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi>
            <img src={imagenesAvatar.vicky.path} width="32px" style={{borderRadius:"5px"}}/><AvatarOptionsSpan>{imagenesAvatar.vicky.title} </AvatarOptionsSpan>
            </AvatarOptionsLi>
            <AvatarOptionsLi>
            <img src={pencil} alt="pencil" width="10%" /><AvatarOptionsSpan>Administrar Perfiles</AvatarOptionsSpan>
            </AvatarOptionsLi>
            <div style={{backgroundColor:"gray",height:"2px",width:"100%"   }}></div>
            <AvatarOptionsLi>
                <AvatarOptionsSpan onClick={()=>{}}>Cerrar sesion en Netflix</AvatarOptionsSpan>
            </AvatarOptionsLi>
        </ul>
     
  </>)
}

export default AvatarOptions