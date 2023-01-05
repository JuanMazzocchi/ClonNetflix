import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../features/auth/AuthContext';
 
 
// HOC

const ProtectedRoutes= ({children}) => {
    // console.log("protectedRoutes");
    
  const {isAuth}=useContext(AuthContext);
  // let check= localStorage.getItem('autorizado');
  // if (check==="true"){
  //   return children
  // }

  if(isAuth){
    console.log("autorizado")
    return children
  };
  // console.log("redireccionado a login")
  return <Navigate to='/login'/>;
};

export default  ProtectedRoutes