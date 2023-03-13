import styled from "styled-components";

export const LoginContainer=styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/fondo.jpg");
background-size: cover;
background-position:center;
background-repeat:no-repeat; 
width:100%;
height:1104px;

`
export const LoginInputContainer = styled.div`

margin:1rem;
padding:7rem;
color:white;
flow-direction:column;
background-color:rgba(0,0,0,0.7);
width:28%;
min-height:660px;
margin-bottom:90px;

`
export const LoginCentrador =styled.div`
display:flex;
justify-content:center;
min-height:660px

`
export const LoginUnderInput=styled.div`
display:flex;
justify-content:space-between;
color:gray;
margin-top:1rem

`
export const LinkAyuda =styled.a`
text-decoration:none;
color:rgba(115,115,115);
font-size:1.3rem;

&:hover{
    text-decoration:underline;
    cursor:pointer;
}
`

export const LoginButton=styled.button`
background-color:rgba(229, 9, 20);
border:none;
padding:1rem;
border-radius:5px;
font-size:2rem;
width:100%;
color:white;

&:hover{
    cursor:pointer;
}
`
export const LoginRememberMe=styled.p`
color:rgba(115,115,115);
font-size:1.3rem;
&:hover{
    cursor:default;
}
`
export const LoginCheckbox=styled.input`
color:black;
&:checked{
    background-color:white;
    color:white;
}
`
export const LoginSuscribContainer=styled.div`
display:flex;
justify-content:space-between;
margin-top:10rem;
margin-bottom:1rem;

`
export const LinkSuscribe=styled.a`
text-decoration:none;
color:white;
font-size:1.5rem;

&:hover{
    text-decoration:underline;
    cursor:pointer;
}
`

export const LoginFooterContainer=styled.div`
display:flex;
justify-content:center;
width:100%;
height:262px;
background-color:rgba(0,0,0,0.8);
bottom:0;
color:gray;
`

export const LoginFooterInner=styled.div`

width:1000px;
padding:30px 0px;

`
export const LoginFooterLinks=styled.div`
padding-top:3rem;
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap:2.5rem;
`

export const LoginFooterLanguageContainer =styled.div`
width:123px;
height:49px;
background-color:black;
display:flex;
alighn-items:center;
margin-top:5rem;
`