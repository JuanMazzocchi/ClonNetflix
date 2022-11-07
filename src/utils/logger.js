export const logger =(msg, title='')=>{
    if(import.meta.env.VITE_MODE ==="PROD"){
        return;
    }
    let mode =import.meta.env.VITE_MODE
    console.log("----------------------------");
    console.log(`[${title}]`,msg);
    console.log("----------------------------");
    console.log(mode)
};