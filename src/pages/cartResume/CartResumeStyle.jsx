import styled from "styled-components";



export const CartResumeContainer = styled.div`
    width: 100%;
    padding-top: 5em;
    h3{
        text-align: center;
        margin-top: 4%;
    }
    .resumeComponent{
        width: 100%;
        height: 85vh;
        padding: 0;
        display: grid;
        grid-template-rows: 4fr 8fr;
    }
    .resumeInfo{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        button{
            width: 50%;
            background-color: #FF0081;
            margin-left: 20%;
            color: #fff;
            border: none;
            padding: 3%;
            border-radius: 15px;
            cursor: pointer;
            letter-spacing: 2px;
            font-weight: bold;
            &:hover{
                background-color: #fff;
                border: solid 1px #FF0081;
                color: #FF0081;
            }
            @media (min-width: 767px){
                width: 30%;
                margin-left: 30%;
                padding: 2%;
            }
            @media (min-width: 1023px){
                width: 20%;
                padding: 1%;
                margin-left: 35%;
            }
        }
    }
    .infoContainer{
        display: flex;
            label{
                font-weight: bolder;
                margin-left: 4%;
            }
            span{
                font-weight: bold;
            }
            a{
                margin-left: 1em;
            }
            .dataContainer{
                margin-left: 1em;
                p{
                    margin-top: 2%;
                }
            }
        }
    .productsInfo{
        width: 100vw;
        overflow: scroll;
        display: grid;
        grid-template-columns: 6fr 6fr;
        @media (min-width: 767px){
            grid-template-columns: 4fr 4fr 4fr;
        }
        @media (min-width: 1023px){
            grid-template-columns: repeat(4, 3fr);
        }
    }
    .cleanButton{
            width: 50%;
            height: 2em;
            margin: auto;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            background-color: #f80000;
            color: #fff;
        }
`