import styled from "styled-components";

export const PopUpContainer=styled.div`
display:flex;
background-color:red;
width:600px;
height:200px;
// overflow:visible !important
 

`

export const PopUpInner=styled.div`

display:${(props)=>props.display};
justify-content:space-between; 
overflow:visible !important;
flex-direction:column;
` 
export const PopUpBackgroundImage=styled.div`
background: url( ${(props)=>props.image});
background-size:contain;
background-position:center;
background-repeat:no-repeat;
width:100%;
height:400px;
display:flex;
flex-direction:column;
justify-content:space-between;
// margin-left:20px

`