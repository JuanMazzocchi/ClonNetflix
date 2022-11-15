import styled from "styled-components";


export const BannerContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:end;
background-color:${(props)=>props.color};
height: 100vh;
width:100%;
background: url( ${(props)=>props.image});
background-size: cover;
background-position:center;
background-repeat:no-repeat;
z-index:-1;

&:before {
    z-index: -1;
    content:"";
    posistion:absolute;
    top:0;
    letf:0;
    width:100%;
    heigth:100%;
    background:linear-gradient(
        to bottom,
        rgba(16,16,16,1)0%,
        rgba(16,16,16,0)10%,
        rgba(16,16,16,0)60%,
        rgba(16,16,16,1)100%
       
    ) ;
}

`;

BannerContainer.defaultProps={
    color:"black"
}

export const ButtonBannerPlay= styled.button`
color: black;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  width:140px;
  border:0;
  

  &:hover{
    background-color:rgba(255,255,255, .5)
`;


 export const ButtonBannerMoreInfo = styled.button`
 color: white;
 background-color:rgba(41, 41, 41, .5);
 font-size: 2rem;
 margin: 1rem;
 padding: 0.5rem 1rem;
 width:200px;
 border:0;

 &:hover{
    background-color:rgba(41, 41, 41, .1)
 }

 `;
 



 export const ContainerTitle = styled.div`
 
 width:30%;
 margin:15rem 0 10rem 10rem;
//  background-color:rgba(168,168,168, 0.8);
//  border-radius:5px
 
 
 `

 export const ImageContainer = styled.div`
 display:flex;
 justify-content:center;
 `

 export const PuntuacionContainer = styled.div`
 display:flex;
 justify-content:flex-end;
 margin-bottom:10rem;
  
 ` 
export const PuntuacionH3=styled.h3`
font-size:2rem;
background-color:black;
padding:1rem;
width:180px;
opacity:0.3;
color:white;
z-index:0;

`