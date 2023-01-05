import styled from "styled-components";


export const NavBarContainer = styled.div`
display:flex;
flex-direction:row;
background-color:rgba(20,20,20,0.2);
color:white;
justify-content:space-between;
height:5rem;
align-items:center;
position:fixed;
top:0;
z-index:10;
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
export const AvatarOptionsContainer=styled.div`
 
display:${(props)=>props.display};   
flex-direction:column;
top:5rem;
position:absolute;
right:0;
width:200px;
background-color:rgba(20,20,20);
padding:10px;
margin-right:20px;

`
export const AvatarOptionsLi=styled.li`
display:flex;
align-items:center;
cursor:pointer;
 



`
 
export const AvatarOptionsSpan=styled.span`
margin:15px;
font-size: 12px;

&:hover{
    text-decoration: underline;
}


`
export const SearchInput=styled.input`
display:block;

`