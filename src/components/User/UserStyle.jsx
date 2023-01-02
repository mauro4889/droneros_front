import { motion } from "framer-motion";
import styled from "styled-components";


export const UserContainer = styled.div`
    label{
            cursor: pointer;
    }
    .menuContainer{
        ul{
            display: flex;
            flex-direction: column;
            background-color: rgba(34, 34, 34, .5);
            height: 0;
            overflow: hidden;
            li{
                font-weight: lighter;
                margin: 3% auto;
                font-size: 12px;
                cursor: pointer;
                height: 1em;
            }
        }
        @media (max-width: 767px){
            visibility: hidden;
        }
    }
`
export const MenuContainer = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    background-color: rgba(34, 34, 34, .5);
    height: 0;
    overflow: hidden;
    padding-top: 1.5em;
    a{
        text-decoration: none;
        font-size: 12px;
        text-align: center;
        color: #fff;
        :visited{
            color: #fff;
        }
    }
    li{
        font-weight: lighter;
        margin: 3% auto;
        
    }
`