

import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext'
import { authInitialState, authReducer, AUTH_TYPES,AVATAR_TYPES,initialazeAuthState } from './reducer/Authreducer'

const AuthProvider = ({children}) => {
const [auth, dispatch] = useReducer(authReducer,authInitialState,initialazeAuthState)
const [Mylist,setMylist]=useState()
const [firstLog,setFirstLog]=useState(true)
// const isLogued = ()=>{
//   console.log("isLogued corriendo")
//   let local = JSON.parse(localStorage.getItem("auth"));
//   if (local!=null){
//     console.log("ya hay un usuario logueado")
//     login(local.name)
//   }
// }


const login = (name)=>{
    // console.log("usuario entrante", name)
    
    const autho ={
        isAuth:true,
        name,
    }
    
    // const modelo = {
    //     user: {
    //       nameOrEmail: "",
    //       avatars: [
    //         {
    //           ProfileName: "",
    //           ProfilePic:"",
    //           list: []
    //         }
    //       ]
    //     }
    //   };

    let usuario = {
        user: {
          nameOrEmail:name,
          avatars: [
            {
                ProfileName: "Invitado",
                ProfilePic:"santi",
                list: []
              },
              {
                ProfileName: "Principal",
                   ProfilePic:"juano",
                      list: []
                  },  {
                      ProfileName: "Niños",
                      ProfilePic:"vicky",
                      list: []
                  }
          
          ]
        }
      };
    let marcador=false;
    let local = JSON.parse(localStorage.getItem("usuarios")); 
    const ls = local
     if (local){
        // SI HAY DATOS EN local, PASA A REVISAR SI SE REPITE EL nameOrEmail
      let listOfUsers=[]
      local.forEach((user)=>{
        // console.log(user.user.nameOrEmail)
        listOfUsers.push(user.user.nameOrEmail)
        // console.log(listOfUsers.indexOf(name))
        
        
      } );
      if (listOfUsers.indexOf(name)=="-1"){
        // console.log("no esta en la lista")
        marcador=true          
        }  

    }else{
        //SI NO HAY DATOS EN EL local
        const ls =[];
          ls.push(usuario)
          localStorage.setItem("usuarios",JSON.stringify(ls))
    }
  
    if (marcador===true){
        ls.push(usuario)
        localStorage.setItem("usuarios",JSON.stringify(ls));
      }
     
 
    localStorage.removeItem('auth')
    localStorage.setItem('auth', JSON.stringify(autho))
   
   
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
const selectedAvatar =(name)=>{
    const avatars={
        avatarName:name
    }
    localStorage.setItem("avatar",JSON.stringify(avatars));
    dispatch({
        type:AVATAR_TYPES.OPCION,
        payload:{name}
    })
     
};
const createList =()=>{
  let listaNueva=[]
  const watchingUser = JSON.parse(localStorage.getItem("auth"));
  const avatarOfWatchingUser = JSON.parse(localStorage.getItem("avatar"));
  let local = JSON.parse(localStorage.getItem("usuarios"));
  local.forEach((user)=> {
      if (user.user.nameOrEmail==watchingUser.name){
           user.user.avatars.forEach((avatar)=>{
              
              // console.log(avatar)
              if (avatar.ProfilePic==avatarOfWatchingUser.avatarName.toLowerCase()){
                // console.log(avatar.ProfilePic) 
                // console.log(avatar.list) 
                listaNueva=avatar.list
                 
              }
          })
      }
    // console.log(list);
    setMylist(listaNueva)

  });
};





const addToList =(item)=>{
    const watchingUser = JSON.parse(localStorage.getItem("auth"));
    const avatarOfWatchingUser = JSON.parse(localStorage.getItem("avatar"));
    // console.log(avatarOfWatchingUser.avatarName, "avatar name")
    // console.log(watchingUser.name)
    // console.log(item)
    let local = JSON.parse(localStorage.getItem("usuarios"));
    // console.log(local.forEach((user)=>{console.log(user)}))

    local.forEach((user)=>{
        if(user.user.nameOrEmail===watchingUser.name){
             
            user.user.avatars.forEach((avatar)=>{
                
                if(avatar.ProfilePic===avatarOfWatchingUser.avatarName.toLowerCase()){
                  let repetido=false
                    avatar.list.forEach((elemento)=>{
                       if (item.id==elemento.id && item.name==elemento.name){
                       repetido=true;
                       } 
                    });
                   
                  if(repetido==false){
                    avatar.list.push(item)
                    let listaNueva=avatar.list
                    // console.log("Lista con nuevo item")
                    // console.log(listaNueva)
                    setMylist(listaNueva)
                  } 
                     
                }
            })

        }
    })

// console.log(local);
localStorage.setItem("usuarios",JSON.stringify(local));

}

const removeFromList=(item)=>{
  const watchingUser = JSON.parse(localStorage.getItem("auth"));
  const avatarOfWatchingUser = JSON.parse(localStorage.getItem("avatar"));
  let local = JSON.parse(localStorage.getItem("usuarios"));

  local.forEach((user)=>{
    if(user.user.nameOrEmail===watchingUser.name){
      user.user.avatars.forEach((avatar)=>{
        if(avatar.ProfilePic===avatarOfWatchingUser.avatarName.toLowerCase()){
          if(item.MOVIE){
            // console.log(item.MOVIE)
            
            // console.log([item.MOVIE,item.id], "esta buscamos")
            let index=0
            avatar.list.forEach((elemento)=>{
              // console.log(elemento.id)

              if (elemento.id==item.id){

                // console.log("encontrado")
                avatar.list.splice(index,1)
                let listaNueva=avatar.list
                setMylist(listaNueva)
                index=index+1

              }else{
                // console.log("no se encontro en el indice: ", index )
                    index=index+1
                  }
            });
          //  console.log(avatar.list)
          }
          else{
            let index=0
            avatar.list.forEach((elemento)=>{
              // console.log(elemento)

              if (elemento.id==item.id){

                // console.log("encontrado")
                avatar.list.splice(index,1)
                let listaNueva=avatar.list
                setMylist(listaNueva)
                index=index+1

              }else{
                // console.log("no se encontro en el indice: ", index )
                    index=index+1
                  }
                       })
             
             
            // console.log(avatar.list)
          }
        }

      })
    }


  })
  localStorage.setItem("usuarios",JSON.stringify(local));
}

    
  return (
     <AuthContext.Provider 
     value={{login,firstLog,setFirstLog,logout,selectedAvatar,auth,addToList,removeFromList,Mylist,createList}}
     >
        {children}
     </AuthContext.Provider>
  )
}

export default AuthProvider