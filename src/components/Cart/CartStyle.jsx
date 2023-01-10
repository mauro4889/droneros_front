import styled from "styled-components";


export const CartContainer = styled.div`
    
    button{
        color: #fff;
        background-color: rgba(34, 34, 34, .5);
        border: none;
    }
    .badgeCounter{
        background-color: #FF0081;
        color: #fff;
        width: 20%;
        height: 15%;
        padding-top: 2px;
        text-align: center;
        border-radius: 100%;
        margin-top: 1em;
        margin-left: 1em;
        font-weight: bold;
        @media (max-width: 767px){
            height: 25%;
        }
    }
`