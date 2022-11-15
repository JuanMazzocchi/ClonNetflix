import styled from "styled-components";


export const NavBarContainer = styled.div`
display:flex;
flex-direction:row;
background-color:black;
color:white;
justify-content:space-between;
height:5rem;
align-items:center;
position:fixed;
top:0;
z-index: 10;
width:100%;
font-size:1.5rem;

`;

export const NavBarIzquierda =styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width:50%;
& p:hover{
    color:rgba(255,255,255,0.8);
    cursor:pointer;
}
`;

export const NavBarDerecha=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width:20%;
align-items:center;
z-index: 2;
`
 