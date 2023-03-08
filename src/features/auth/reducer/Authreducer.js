
export  const authInitialState = {
    user:{
        name:null,
    },
    isAuth:false,
    avatar:null,
};

export const AUTH_TYPES = {
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT",
}

export const AVATAR_TYPES = {
    OPCION:"OPCION",

}

export const initialazeAuthState =()=>{
    let local = JSON.parse(localStorage.getItem("auth"));
    if (local!=null){
        console.log( "autorizado= " +local.isAuth +" Nombre= "+ local.name+"    desde reducer")
         }
    
return JSON.parse(localStorage.getItem("auth")) || authInitialState; //Si no existe "auth" retorna el authInitialState
}

/*
interface Action{
    type:string,
}
*/

export const authReducer = (state,action)=>{

    switch (action.type) {
        case AUTH_TYPES.LOGIN:
            
            return {
                ...state,
                user:{
                    name:action.payload.name,
                },
                isAuth:true,
            };
        
        case AUTH_TYPES.LOGOUT:
                return {
                    ...state,
                    user:{
                        name:null,
                    },                    
                    isAuth:false,
                };

        case AVATAR_TYPES.OPCION:
            return {
                ...state,
                avatar:action.payload.name

            }
        default:
            return state;
    }
}