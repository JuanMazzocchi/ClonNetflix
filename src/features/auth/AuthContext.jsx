import React ,{ createContext, useState } from "react";


export const AuthContext = createContext();

const AuthProvider =({children})=>{
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [avatar,setAvatar]=useState(null);

  return (
    <AuthContext.Provider 
    value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        setAvatar,
        avatar}}> 

    {children}

    </AuthContext.Provider>
  )

};

export default AuthProvider;