import { motion } from "framer-motion";
import styled from "styled-components";


export const NavStyle = styled.div`
    background-color: rgb(34, 34, 34);
    width: 100vw;
    height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
`

export const LogoStyle = styled.div`
    width: 25%;
    height: 95%;
    img{
        width: 100%;
        height: 100%;
    }
    @media (min-width: 767px){
        width: 15%;
    }
    @media (min-width: 1023px){
        width: 10%;
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
    @media (min-width: 767px){
        display: none;
    }
`

export const NavMenuStyle = styled(motion.div)`
    top: 0em;
    opacity: 0;
    position: absolute;
    color: #fff;
    width: 100vw;
    height: 60vh;
    background-color: rgba(34, 34, 34, .5);
    z-index: -100;
    ul{
        margin-left: 5%;
        margin-top: 4em;
    }
    li{
        list-style: none;
        margin: 8% auto;
        font-weight: 300;
        letter-spacing: 5px;
    }
    .links{
        text-decoration: none;
        &:visited{
            color: #fff;
        }
    }
    @media (min-width: 767px){
        position: static;
        width: 75%;
        height: 100%;
        z-index: 10;
        opacity: 1 !important;
        ul{
            display: flex;
            width: 100%;
            height: 100%;
            margin: 0;
            justify-content: space-around;
            padding-top: 5%;
        }
        li{
            margin: 0;
            height: 100%;
        }
    }
    @media (min-width: 1439px){
        ul{
            padding-top: 3%;
        }
    @media (min-width: 1360px){
        padding-top: 0;
    }
    }
`