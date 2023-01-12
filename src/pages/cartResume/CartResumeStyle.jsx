import styled from "styled-components";



export const CartResumeContainer = styled.div`
    width: 100%;
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
            &:hover{
                background-color: #fff;
                border: solid 1px #FF0081;
                color: #FF0081;
            }
        }
    }
    .infoContainer{
        display: flex;
            label{
                font-weight: bold;
                margin-left: 4%;
            }
        }
    .productsInfo{
        width: 100vw;
        overflow: scroll;
        display: grid;
        grid-template-columns: 6fr 6fr;
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