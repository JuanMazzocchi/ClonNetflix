import React from 'react'

const Prueba = (data) => {
    // console.log(data.data.crew)
    let nombres = []
    let director=[]
    if (data?.data.cast!=undefined){
        for (let index = 0; index < data.data.cast.length; index++) {
            const element =  data.data.cast[index];
            nombres.push(element.name)
        } 
    }
    if(data?.data.crew!=undefined){
        for (let index = 0; index < data.data.crew.length; index++) {
            const element =  data.data.crew[index];
            if(element.known_for_department==="Directing"){
                director.push(element.name)
                break
            }
            
        }
    }
     
  return (
    <div style={{display:"flex", flexDirection:"column", padding:"10px"}}>
    <div style={{color:"lightgrey"}}>Elenco:  </div>
    <div style={{padding:"10px"}}>
    <p>{nombres[0]}</p>
    <p>{nombres[1]}</p>
    <p>{nombres[2]}</p>
    </div>
    <div style={{color:"lightgrey"}}>Director:  </div>
    <div style={{padding:"10px"}}>
        <p>{director[0]}</p>
    </div>

    </div>
  )
}

export default Prueba