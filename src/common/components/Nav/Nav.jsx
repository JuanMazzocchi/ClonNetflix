import React, { useContext, useState } from 'react'
import { NavBarContainer, NavBarDerecha, NavBarIzquierda, SearchInput } from './styles/NavStyle'
import logo from "../../../assets/kisspng-netflix-streaming-media-television-show-logo-netflix-5b35ddf096b661.9355823215302568806173.png"
import lupa from "../../../assets/search.png"
import campanita from "../../../assets/bell.png"
 

 
import Avatar from '../avatar/Avatar'
import { useNavigate } from "react-router-dom";
import AvatarOptions from './AvatarOptions'

const Nav = () => {
const [keyword,setKeyword]=useState({palabra:""});
const navigate=useNavigate();
const navegarMovie =()=>{
  navigate('/sectionMovie' ,{replace:true});
};

const navegarInicio=()=>{
  navigate('/principal' ,{replace:true});
};
const navegarSeries=()=>{
  navigate('/sectionSeries')

};
const navegarNovedades=()=>{
  navigate('/novedades')
}

const navegarSearch=()=>{
  // console.log("navergarSearch")
  navigate(`/search/${keyword.palabra}`)
}
const something = (event) => {
  if (event.keyCode === 13) {
    console.log("ir a search",keyword)
   navegarSearch()
  }

};
const handleChange = (e) => {
  const {value}=e.target
  setKeyword({...keyword,palabra:value});
  
    
};
const[mostrarInput, setMostrarInput] =useState("none");
const showInput = ()=>{
  setMostrarInput("block")

}
const hideInput = ()=>{
  setMostrarInput("none")
}

 



let ubicacionInicial = window.pageYOffset;
window.onscroll = ()=>{
  let desActual = window.pageYOffset;
  if (ubicacionInicial>=desActual){
    document.getElementById("NavBarContainer").style.backgroundColor="rgba(20,20,20,0.2)";
  }else{
    document.getElementById("NavBarContainer").style.backgroundColor="rgba(20,20,20,0.9)";
  }
}
  return (
    <>
    <NavBarContainer id='NavBarContainer'>
        <NavBarIzquierda>
            <img src={logo} alt="" width="10%"/> 
            <p onClick={()=>{navegarInicio()}}>Inicio</p>
            <p onClick={()=>{navegarSeries()}}>Series</p>
            <p onClick={()=>{navegarMovie()}}  >Peliculas </p>
            <p onClick={()=>{navegarNovedades()}}>Novedades Populares</p>
            <p>Mi lista</p>
            <p>Explorar por idiomas</p>  
        </NavBarIzquierda>
        <NavBarDerecha>
            <div style={{display:mostrarInput}} ><input type="text" value={keyword.palabra}  onChange={handleChange} onKeyDown={(e) => something(e)} onMouseLeave={hideInput} /></div>
            <img src={lupa} alt="lupa" width="8%"  style={{cursor:"pointer"}} onMouseOver={showInput} />
            <p>Niños</p>
            <img src={campanita} alt="bell" width="8%" />
            <Avatar /> 
            
        </NavBarDerecha>
        
    
    </NavBarContainer>
     
    </>
  )
}

export default Nav