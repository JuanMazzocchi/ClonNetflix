import styled from "styled-components";

export const SelectUserContainer=styled.div`
background-color:rgba(20,20,20);
width:100%;
height:757px;
color:white;
display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
align-items:center;
`

export const SelectUserUsersIconsContainer=styled.div`
width:70%;
display:flex;
margin-top:5rem;
justify-content:space-evenly;
color:gray;


& >div>img{
    border-radius:5px;
    margin-bottom:1rem;
}
& >div>img:hover{
    outline:3px solid white;
    cursor:pointer;
    
}

`
export const SelectUserAdmin=styled.div`
width:243px;
height:44px;
border:2px solid gray;
text-align:center;
margin-top:8rem;
color:gray;
padding:1rem;

&:hover{
    border:2px solid white;
    color:white;
    cursor:pointer;
}

`