import styled from "styled-components";

export const LoginContainer=styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/AR-es-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg");
// background: url("/src/assets/AR-es-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg");
background-size: cover;
background-position:center;
background-repeat:no-repeat; 
width:100%;
height:100vh;
`
export const LoginInputContainer = styled.div`

margin:1rem;
padding:7rem;
color:white;
flow-direction:column;
background-color:rgba(0,0,0,0.7);
width:28%;
height:60vh;

`
export const LoginCentrador =styled.div`
display:flex;
justify-content:center

`
export const LoginUnderInput=styled.div`
display:flex;
justify-content:space-between;
color:gray;
margin-top:1rem

`