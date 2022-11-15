import styled from "styled-components";

export const CardContainer=styled.div`
transition: all 0.3s  ease-in-out;
z-index:2;
& img{
    border-radius:5px;
    overflow: visible !important;

    
}

&:hover {
    transform: scale(1.1);
    cursor:pointer;
}
`