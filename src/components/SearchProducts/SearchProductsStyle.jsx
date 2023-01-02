import styled from "styled-components";


export const SearchProductContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    h3{
        text-align: center;
        margin-top: 6%;
        @media (min-width: 1439px){
            margin-top: 2%;
        }
    }
    .backButton{
        margin: 2% auto;
        margin-left: 2%;
        border: none;
        background-color: #fff;
        font-size: 15px;
        cursor: pointer;     
    }
    form{
        width: 70%;
        margin: 4% auto;
        display: flex;
        flex-direction: column;
        @media (min-width: 767px){
            width: 60%;
        }
        @media (min-width: 1023px){
            width: 50%;
        }
        @media (min-width: 1439px){
            width: 40%;
        }
        input{
            margin-top: 4%;
            margin-bottom: 4%;
        }
        label{
            font-weight: bold;
        }
        button{
            margin-top: 6%;
            border: none;
            height: 2em;
            border-radius: 5px;
            font-weight: bold;
            background-color: #20A5F4;
            color: #fff;
            cursor: pointer;
            :hover{
                background-color: #0f5680;
            }
        }
    }
`