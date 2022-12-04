

import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authInitialState, authReducer, AUTH_TYPES } from './reducer/Authreducer'

const AuthProvider = (children) => {
const [auth, dispatch] = useReducer(authReducer,authInitialState, {})
const login = (name)=>{

    const auth ={
        isAuth:true,
        name,
    }
    localStorage.setItem('auth', JSON.stringify())
    dispatch({
        type: AUTH_TYPES.LOGIN,
        payload:{name},
    });
};

const logout =()=>{
    dispatch({
        type:AUTH_TYPES.LOGOUT,
    });
    localStorage.removeItem('auth');

};

    
  return (
     <AuthContext.Provider 
     value={{login,logout}}
     >

     </AuthContext.Provider>
  )
}

export default AuthProvider