import React, { useContext } from 'react'
import { SelectUserAdmin, SelectUserContainer, SelectUserUsersIconsContainer } from "./styledComponents/styled";
import nuri from "../../assets/nuri.png";
import juano from "../../assets/juano.png";
import martin from "../../assets/martin.png";
import santi from "../../assets/santi.png";
import vicky from "../../assets/vicky.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

const SelectUser = () => {
    const navigate = useNavigate();
    const {setAvatar}=useContext(AuthContext);

    const onClick= (e)=>{
      const {name}=e.target;
      // console.log("****************",name)
      setAvatar(name);
      navigate('/principal', {replace:true})





    }

  return (
     <SelectUserContainer>
        <div><h1 style={{fontSize:"5rem"}}>¿Quién está viendo ahora?</h1></div>
        <SelectUserUsersIconsContainer>
          <div><img src={nuri} name="Nuri" width="160px" height="160px" onClick={onClick}/>
          <p>Nuria</p></div>
          <div><img src={martin} name="Martin" width="160px" height="160px" onClick={onClick}/>
          <p>Martin</p></div>
          <div><img src={juano} name="Juano" width="160px" height="160px" onClick={onClick}/>
          <p>Juano</p></div>
          <div><img src={santi} name="Santi" width="160px" height="160px" onClick={onClick}/>
          <p>Santiago</p></div>
          <div><img src={vicky} name="Vicky" width="160px" height="160px" onClick={onClick}/>
          <p>Vicky</p></div>

          
            
          
            
            
            
        </SelectUserUsersIconsContainer>
            <SelectUserAdmin>
            <p>Administrar Perfiles</p>
            </SelectUserAdmin>
     
     
     
     </SelectUserContainer>
  )
}

export default SelectUser