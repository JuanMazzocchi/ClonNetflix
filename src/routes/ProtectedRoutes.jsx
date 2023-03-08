import React from 'react';
import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../features/auth/AuthContext';
 
// HOC

const ProtectedRoutes= ({children}) => {
  // console.log("protectedRoutes");
    
  const {auth, firstLog,setFirstLog,login}=useContext(AuthContext);
  console.log("firstLog =   "+ firstLog)
  // if(firstLog==false){
  //    if(auth.isAuth ===true){
  //   console.log("autorizado desde protected")
  //   console.log(auth.isAuth)
  //   return children
  // } else if(firstLog===true){
  //   console.log("primer ingreso, direccionando a selectUser")
  //   setFirstLog(false);
  //   
  // }
  

 
  // };
  
  // return <Navigate to='/login'/>;

  if(auth.isAuth===true && firstLog===true){
    setFirstLog(false)
     return <Navigate to='/selectUser'/>

  }else if(auth.isAuth===true && firstLog===false){
    return children
  }
  return <Navigate to='/login'/>;





  };

 

 



 

export default  ProtectedRoutes