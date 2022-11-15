import React from 'react'
import { NavBarContainer, NavBarDerecha, NavBarIzquierda } from './styles/NavStyle'
import logo from "../../../assets/kisspng-netflix-streaming-media-television-show-logo-netflix-5b35ddf096b661.9355823215302568806173.png"
import lupa from "../../../assets/search.png"
import campanita from "../../../assets/bell.png"
import avatar from "../../../assets/profile.png"

const Nav = () => {
  return (
    <>
    <NavBarContainer>
        <NavBarIzquierda>
            <img src={logo} alt="" width="10%"/> 
            <p>Inicio</p>
            <p>Series</p>
            <p>Peliculas</p>
            <p>Novedades Populares</p>
            <p>Mi lista</p>
            <p>Explorar por idiomas</p>  
        </NavBarIzquierda>
        <NavBarDerecha>
            <img src={lupa} alt="lupa" width="8%" />
            <p>Niños</p>
            <img src={campanita} alt="bell" width="8%" />
            <img src={avatar} alt="avatar" width="15%" />  
        </NavBarDerecha>
    
    </NavBarContainer>
     
    </>
  )
}

export default Nav