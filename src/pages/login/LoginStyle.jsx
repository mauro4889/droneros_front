import styled from "styled-components";


export const LoginContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
        margin-top: 1em;
    }
`

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 80%;
    margin: auto;
    background-color: #2B2E33;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 1em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    @media (min-width: 767px){
        width: 60%;
        margin-top: 2em;
    }
    @media (min-width: 1023px){
        width: 50%;
    }
    @media (min-width: 1300px){
        width: 40%;
    }
    label{
        font-family: 'Open Sans';
        letter-spacing: 2px;
        font-size: 17px;
        @media (min-width: 767px){
            font-size: 20px;
        }
    }
    input{
        width: 80%;
        border: none;
        height: 1.5em;
        border-radius: 5px;
        padding-left: 2%;
        @media (min-width: 767px){
            height: 2em;
        }
    }
    button{
        width: 25%;
        height: 1.5em;
        border: none;
        border-radius: 5px;
        background-color: #FF0081;
        color: #fff;
        font-family: 'Open Sans';
        font-size: 15px;
        cursor: pointer;
        &:hover{
            background-color: #fff;
            color: #FF0081;
            border: solid 1px #FF0081;
        }
        @media (min-width: 767px){
            height: 2em;
            font-size: 20px;
        }
    }
    .alternate_login{
        width: 25%;
        button{
            width: 100%;
            background-color: #2B2E33;
            &:hover{
                border: none;
            }
        }
        img{
            width: 50%;
        }
    }
`