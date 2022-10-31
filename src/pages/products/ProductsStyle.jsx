import { motion } from "framer-motion";
import styled from "styled-components";


export const ProductsContainerStyle = styled.div`
    height: 100vh;
    .portada{
        width: 100vw;
        height: 10em;
        background-attachment: fixed;
        background-position: center;
        @media (min-width: 767px){
            height: 15em;
        }
        @media (min-width: 1023px){
            height: 20em;
        }
        @media (min-width: 1300px){
            height: 25em;
        }
    }
    h2{
        position: absolute;
        width: 100%;
        top: 8em;
        color: #000;
        font-family: 'Open Sans';
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
        @media (min-width: 767px){
            font-size: 35px;
            top: 7.5em;
        }
        @media (min-width: 1023px){
            top: 9em;
        }
        @media (min-width: 1300px){
            top: 12em;
            letter-spacing: 5px;
        }
    }
`
export const ContainerFilter = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-around;
    margin-top: 5%;
    @media (min-width: 767px){
        width: 90vw;
        margin: 2em auto;
    }
    button{
        border: none;
        background-color: #fff;
        width: 6em;
        font-family: 'Open Sans';
        letter-spacing: 1.5px;
        cursor: pointer;
        @media (min-width: 1023px){
            font-size: 20px;
            font-weight: 500;

        }
    }
    .icon{
        margin-left: 1.5em;
        font-size: 15px;
    }
    form{
        width: 50%;
    }
    label{
        margin-right: 2%;
        @media (min-width: 1023px){
            font-size: 20px;
        }
    }
    select{
        border: none;
        @media (min-width: 1023px){
            font-size: 18px;
        }
    }
`

export const FilterContainer = styled(motion.div)`
    height: 100%;
    background-color: #f8f6f6;
    position: absolute;
    top: 15em;
    padding-right: 5%;
    @media (min-width: 767px){
        top: 20em;
    }
    @media (min-width: 1023px){
        top: 25em;
    }
    ul{
        height: 100%;
        margin-left: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10%;
    }
    li{
        list-style: none;
        cursor: pointer;
        letter-spacing: 2px;
        font-family: 'Open Sans'
    }
    .iconClose{
        font-size: 20px;
        margin-top: 1em;
        margin-left: 6em;
        cursor: pointer;
    }
    button{
        border: none;
        background-color: #F8F6F6;
    }
`

export const ContainerProducts = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`