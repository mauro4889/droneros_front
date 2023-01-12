import styled from "styled-components";


export const DetailProductContainer = styled.div`
    width: 100%;
    margin: 2% auto;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
    text-align: center;
    p{
        padding: auto;
        @media (min-width: 767px){
            text-align: center;
        }
    }
    form{
        display: flex;
        justify-content: space-around;
    }
    button{
        color: #FF0081;
        background-color: #fff;
        border: none;
        height: 15px;
        cursor: pointer;
        :focus{
            color: #000;
        }
    }
    .containerButtons{
        display: flex;
        justify-content: space-evenly;
    }
`