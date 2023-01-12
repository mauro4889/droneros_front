import styled from "styled-components";


export const AdminPanelContainer = styled.div`
    width: 100%;
    font-family: 'Open Sans';
    text-align: center;
    padding-top: 5em;
    h2{
        margin: 4% auto;
    }
    .container-options{
        width: 90%;
        margin: auto;
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @media (min-width: 1439px){
            margin-top: 2%;
        }
    }
    button{
        height: 3em;
        border: none;
        margin: 4% auto;
        width: 50%;
        border-radius: 5px;
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        :active{
            background-color: #FF0081;
            color: #FFF;
        }
        a{
            text-decoration: none;
            :visited{
                color: #000;
            }
        }
        @media (min-width: 1439px){
            margin: 2% auto;
        }
    }
`