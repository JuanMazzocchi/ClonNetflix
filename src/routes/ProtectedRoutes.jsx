import React from 'react';
import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../features/auth/AuthContext';
 
// HOC

const ProtectedRoutes= ({children}) => {
  // console.log("protectedRoutes");
    
  const {auth, firstLog,setFirstLog,login}=useContext(AuthContext);
  console.log("firstLog =   "+ firstLog)
  
  if(auth.isAuth===true && firstLog===true){ //si esta autorizado y es la 1era vez que entra entonces va directo a select
    setFirstLog(false)
     return <Navigate to='/selectUser'/>

  }else if(auth.isAuth===true && firstLog===false){ //si no es la 1era vez sigue al children
    return children
  }
  return <Navigate to='/login'/>; //si no esta auto va a login





  };

 

 



 

export default  ProtectedRoutes