import { motion } from "framer-motion";
import styled from "styled-components";


export const ProductsContainerStyle = styled.div`
    height: 100vh;
    .portada{
        width: 100vw;
        height: 10em;
        background-attachment: fixed;
        background-position: center;
    }
    h2{
        position: absolute;
        top: 8em;
        left: 1.2em;
        color: #000;
        font-family: 'Open Sans';
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`
export const ContainerFilter = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-around;
    margin-top: 5%;
    button{
        border: none;
        background-color: #fff;
        width: 6em;
        cursor: pointer;
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
    }
    select{
        border: none;
    }
`

export const FilterContainer = styled(motion.div)`
    height: 100%;
    background-color: #f8f6f6;
    position: absolute;
    top: 5em;
    left: -10em;
    padding-right: 5%;
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
`

export const ContainerProducts = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
`