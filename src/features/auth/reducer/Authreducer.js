
export  const authInitialState = {
    user:{
        name:null,
    },
    isAuth:false,
};

export const AUTH_TYPES = {
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT",
}

export const initialazeAuthState =()=>{
return JSON.parse(localStorage.getItem("auth")) || authInitialState; //Si no esxiste "auth" retorna el authInitialState
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
                    name:null,
                    isAuth:false,
                };
        default:
            return state;
    }
}