import styled from "styled-components";

export const CardContainer=styled.div`
display:${(props)=>props.display};
transition: all 0.3s  ease-in-out;
z-index:10;
width:160px;
height:216px;
overflow:visible;

 

& img{
    border-radius:5px;
  
}

&:hover {
   
    transform: scale(1.2);
    cursor:pointer;
     

    
}
 

`