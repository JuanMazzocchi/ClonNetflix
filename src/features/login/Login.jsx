import React, { useContext, useState  } from 'react';
 
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginCentrador, LoginContainer, LoginInputContainer, LoginUnderInput } from './styledComponents/styled';
import logo from "../../assets/kisspng-netflix-streaming-media-television-show-logo-netflix-5b35ddf096b661.9355823215302568806173.png"

const Login = () => {
 const {user,setUser,setIsAuth}=useContext(AuthContext);
    const [formularioLogin, setFormularioLogin] = useState({
        nombre: "",
        pass: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
         
    
        setFormularioLogin({
          ...formularioLogin,
          [name]: value,
        });
      };
    const navigate = useNavigate();

    const submit=()=>{
      setUser({
        nombre:formularioLogin.nombre,
        pass:formularioLogin.pass
      });
      setIsAuth(true);
      navigate('/principal',{ replace:true});

      // localStorage.setItem('autorizado', 'true');

      // navigate('/checkout',{ replace:true});

      
    };
    




  return (<>
  <LoginContainer>
   <div> <img src={logo} width="15%"/></div>
    <LoginCentrador>
    <LoginInputContainer>
    <div><p style={{fontSize:"3rem",marginBottom:"1rem"}}>Inicia Sesion</p></div>
    <div >
     
   <div style={{width:"100%",marginBottom:"1rem"}}> <input
      style={{height:"4rem", backgroundColor:"rgba(51,51,51)",borderRadius:"5px",border:"none",width:"100%",padding:"1rem",color:"white"}} 
      size="40"  
      type="text"
      name="nombre"
      placeholder='Email o numero de telefono'
      value={formularioLogin.nombre}
      onChange={handleChange}
    />
    </div>
     <div >
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
     <div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}><button style={{backgroundColor:"rgba(229, 9, 20)",border:"none",padding:"1rem",borderRadius:"5px",fontSize:"2rem",width:"100%",color:"white" }} onClick={()=>{submit()}}>Inicia sesion</button></div>
    <LoginUnderInput>
       <p><input type="checkbox"/>Recuerdame</p> <p>¿Necesitas ayuda?</p>
    </LoginUnderInput>
     </LoginInputContainer>
     </LoginCentrador>
 </LoginContainer>
    </>
  )
}

export default Login