import { motion } from "framer-motion";
import styled from "styled-components";


export const NavStyle = styled.div`
    background-color: rgb(34, 34, 34);
    width: 100vw;
    height: 4.5em;
    display: grid;
    grid-template-columns: 2fr 8fr 1fr 1fr;
    position: fixed;
    align-items: center;
    @media (max-width: 767px){
        grid-template-columns: 3fr 6fr 1fr 2fr;
    }
    @media (min-width: 1023px){
        align-items: start;
        padding-top: 2em;
        padding-bottom: 0;
        height: 6em;
    }
    @media (min-width: 1439px){
        height: 7em;
    }
    .userButton{
        width: 25%;
        height: 20%;
        background-color: rgb(34, 34, 34);
        color: #fff;
        border: none;
        cursor: pointer;
        @media (min-width: 767px){
            margin-left: 1em;
        }
    }
`

export const LogoStyle = styled.div`
    width: 100%;
    height: 50%;
    img{
        width: 60%;
        height: 100%;
        @media (max-width: 767px){
            width: 80%;
        }
        @media (min-width: 767px){
            height: 74%;
            
        }
    }
`
export const NavButtonStyle = styled.div`
    width: 1em;
    height: 1em;
    color: #fff;
    font-size: 25px;
    margin-right: 5%;
    cursor: pointer;
    &.btnMenu{
        margin: 0;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 765px){
        margin: auto;
    };
    @media (min-width: 767px){
        display: none;
    }
    
`

export const NavMenuStyle = styled(motion.div)`
    top: 0em;
    opacity: 0;
    position: absolute;
    color: #fff;
    height: 60vh;
    background-color: rgba(34, 34, 34, .5);
    z-index: -100;
    ul{
        margin-left: 5%;
        a{
            text-decoration: none;
            color: #fff;
            :visited{
                color: #fff;
            }
        }
    }
    li{
        list-style: none;
        margin: 8% auto;
        font-weight: 300;
        letter-spacing: 5px;
        cursor: pointer;
    }

    @media (max-width: 767px){
        width: 100vw;
    }
    
    @media (min-width: 767px){
        position: static;
        height: 100%;
        z-index: 10;
        opacity: 1 !important;
        ul{
            display: flex;
            width: 100%;
            height: 100%;
            margin: 0;
            justify-content: space-around;
            
        }
        li{
            margin: 0;
            height: 100%;
        }
    }
    @media (min-width: 1439px){
        padding-top: 1em;
    }
`