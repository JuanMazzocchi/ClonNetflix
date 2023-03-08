import React, { useState } from 'react'
import { NavBarContainer, NavBarDerecha, NavBarIzquierda, SearchInput } from './styles/NavStyle'
import logo from "../../../assets/kisspng-netflix-streaming-media-television-show-logo-netflix-5b35ddf096b661.9355823215302568806173.png"
import lupa from "../../../assets/search.png"
import campanita from "../../../assets/bell.png"
import Avatar from '../avatar/Avatar'
import { useNavigate } from "react-router-dom";
 

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
    console.log("buscando")
    console.log(keyword.palabra)
    navigate(`/search/${keyword.palabra}`)
  };
  const something = (event) => {
    if (event.keyCode === 13) {
      input.classList.remove('active')
      input.classList.remove('focus')
    navegarSearch()
    }

  };
  const handleChange = (e) => {
    const {value}=e.target
    setKeyword({...keyword,palabra:value});


  };
  
  const navegarMyList=()=>{
    navigate('/myList');
  };
  var input = document.querySelector('.search-form');
  var search = document.querySelector('input')
  
  const clickButton=()=>{
    // console.log("click")
    let input = document.querySelector('.search-form');
    if(input.classList=='search-form active'){
      input.classList.remove('active')
      
    }else{
    input.classList.add('active');}
  }
  const searchFocus=()=>{
    input = document.querySelector('.search-form');
    input.classList.add('focus');
  }
  const searchBlur=()=>{
    search.value.length != 0 ? input.classList.add('focus') : input.classList.remove('focus');
  }

  let ubicacionInicial = window.pageYOffset;
  window.onscroll = ()=>{
    let desActual = window.pageYOffset;
    if (ubicacionInicial>=desActual){
      document.getElementById("NavBarContainer").style.backgroundColor="rgba(20,20,20,0.2)";
    }else{
      document.getElementById("NavBarContainer").style.backgroundColor="rgba(20,20,20,0.9)";
    };
  };
  return (
    <>
    <NavBarContainer id='NavBarContainer' style={{transition:'all 1s ease-out'}}>
        <NavBarIzquierda>
            <img src={logo} alt="" width="10%"/> 
            <p onClick={()=>{navegarInicio()}}>Inicio</p>
            <p onClick={()=>{navegarSeries()}}>Series</p>
            <p onClick={()=>{navegarMovie()}}  >Peliculas </p>
            <p onClick={()=>{navegarNovedades()}}>Novedades Populares</p>
            <p onClick={()=>{navegarMyList()}}>Mi lista</p>
            <p>Explorar por idiomas</p>  
        </NavBarIzquierda>
        <NavBarDerecha>
            
            <div className="search-form" onFocus={()=>{searchFocus()}} onBlur={()=>{searchBlur()}}>
             <form>
             <input type="text" className='input' value={keyword.palabra}  onChange={handleChange} onKeyDown={(e) => something(e)} />
              <img src={lupa} alt="Buscar" onClick={()=>{clickButton()}} className='button' style={{position:"absolute", cursor:"pointer", width:"30px",height:"30px", transition: "all 0.5s cubic-bezier(.87, -.41, .19, 1.44)" ,top:"-10px",left:"-20px"}} />
             
             </form>
            </div>
            <p>Niños</p>
            <img src={campanita} alt="bell" width="8%" />
            <Avatar /> 
            
        </NavBarDerecha>
        
    
    </NavBarContainer>
     
    </>
  )
}

export default Nav