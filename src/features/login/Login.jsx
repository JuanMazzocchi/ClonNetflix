import React, { useContext, useState  } from 'react';
 
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LinkAyuda, LinkSuscribe, LoginButton, LoginCentrador, LoginCheckbox, LoginContainer, LoginFooterContainer, LoginFooterInner, LoginFooterLanguageContainer, LoginFooterLinks, LoginInputContainer, LoginRememberMe, LoginSuscribContainer, LoginUnderInput } from './styledComponents/styled';
import logo from "../../assets/kisspng-netflix-streaming-media-television-show-logo-netflix-5b35ddf096b661.9355823215302568806173.png"
import globe from "../../assets/globe.png";
const Login = () => {
 const {user,setUser,setIsAuth}=useContext(AuthContext);
    const [formularioLogin, setFormularioLogin] = useState({
        nombre: "",
        pass: "",
      });
    
      const handleChange = (e) => {
         
        const { name, value } = e.target;
        // let coord = e.target.getBoundingClientRect();
        // console.log(coord)
         
    
        setFormularioLogin({
          ...formularioLogin,
          [name]: value,
        });
      };

    const navigate = useNavigate();

    const submit=()=>{
      if (formularioLogin.nombre ==="" | formularioLogin.pass===""){
        alert("Usuario o contraseña incorrectas")
      }else{
         setUser({
        nombre:formularioLogin.nombre,
        pass:formularioLogin.pass
      });
      setIsAuth(true);
      navigate('/selectUser',{ replace:true});
      }


     

      localStorage.setItem('autorizado', 'true');

       

      
    };
  return (<>
  <LoginContainer>
   <div> <img src={logo} width="15%"/></div>
    <LoginCentrador>
    <LoginInputContainer>
    <div><p style={{fontSize:"3rem",marginBottom:"1rem"}}>Inicia Sesion</p></div>
    <div >
     
   <div style={{width:"100%",marginBottom:"1.5rem"}}> <input
      style={{height:"4rem", backgroundColor:"rgba(51,51,51)",borderRadius:"5px",border:"none",width:"100%",padding:"1rem",color:"white"}} 
      size="40"  
      type="text"
      name="nombre"
      placeholder='Email o numero de telefono'
      value={formularioLogin.nombre}
      onChange={handleChange}
    />
    </div>
     <div style={{marginBottom:"3rem"}}>
    <input
        style={{height:"4rem", backgroundColor:"rgba(51,51,51)",borderRadius:"5px",border:"none",width:"100%",padding:"1rem",color:"white"}}
      size="40"         
      type="password"
      name="pass"
      placeholder='Contraseña'
      value={formularioLogin.pass}
      onChange={handleChange}
    />
    </div>
     </div>
     <div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}><LoginButton onClick={()=>{submit()}}>Iniciar sesion</LoginButton></div>
    <LoginUnderInput>
        <LoginRememberMe><LoginCheckbox  type="checkbox" />Recuerdame </LoginRememberMe> <p><LinkAyuda>¿Necesitas ayuda?</LinkAyuda> </p>
    </LoginUnderInput>
    <LoginSuscribContainer><p style={{color:"gray"}}>¿Primera vez en Netflix? </p> <LinkSuscribe>Suscribete ahora.</LinkSuscribe>   </LoginSuscribContainer>
    <div><p style={{fontSize:"1.3rem",color:"gray"}}>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.<a href='#'> Más info.</a></p></div>
     </LoginInputContainer>
    
    </LoginCentrador>
      <LoginFooterContainer>
        <LoginFooterInner><p>¿Preguntas? Llama al 0800 345 1593</p>
          <LoginFooterLinks>
            <LinkAyuda>Preguntas frecuentes</LinkAyuda>
            <LinkAyuda>Centro de ayuda</LinkAyuda>
            <LinkAyuda>Términos de uso</LinkAyuda>
            <LinkAyuda>Privacidad</LinkAyuda>
            <LinkAyuda>Preferencias de cookies</LinkAyuda>
            <LinkAyuda>Información corporativa</LinkAyuda>
          </LoginFooterLinks>
          <LoginFooterLanguageContainer>
            <label  style={{paddingTop:"1.5rem",paddingLeft:"0.5rem"}}><img src={globe} width="50%"/></label>
                <select name="membership" id="membership" style={{backgroundColor:"black",color:"gray",border:"none"}}>
                  <option value="EN">Ingles</option>
                  <option value="ESP" defaultValue>Español</option>
                   
                </select>
          </LoginFooterLanguageContainer>
        </LoginFooterInner>
      </LoginFooterContainer> 
 </LoginContainer>
    </> 
  )
}


export default Login