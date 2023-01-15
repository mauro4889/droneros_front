import styled from "styled-components";


export const ContainerStyle = styled.div`
    width: 45vw;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img{
        width: 100%;
        height: 50%;
    }
    h3{
        font-size: 15px;
        margin-bottom: 2%;
    }
    p{
        font-size: 12px;
    }
    .price{
        color: #FF0081;
    }
    button{
        margin-top: 2%;
        background-color: #FF0081;
        color: #fff;
        border: none;
        padding: 3%;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #fff;
            border: solid 1px #FF0081;
            color: #FF0081;
        }
        @media (min-width: 1023px){
            font-size: 15px;
            font-weight: bold;
        }
        @media (min-width: 1439px){
            padding: 1.5%;
        }
    }
    @media (min-width: 767px){
        img{
            width: 70%;
        }
        .price{
            margin: 2.5% auto;
        }
    }
    @media (min-width: 1023px){
        width: 100%;
        height: 32em;
        img{
            height: 22em;
            width: 80%;
        }
        .price{
            font-size: 15px;
        }
    }
    @media (min-width: 1439px){
        height: 34em;
        .price{
            font-size: 20px;
        }
    }
`