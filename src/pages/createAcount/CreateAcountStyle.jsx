import styled from "styled-components";


export const CreateAcountContainer = styled.div`
    width: 100vw;
    h3{
        letter-spacing: 2px;
        text-align: center;
        margin-top: 2em;
    }
    @media ( min-width: 1339px){
        width: 50%;
        margin: auto;
        h3{
            font-size: 30px;
        }
    }
`

export const FormStyle = styled.form`
    width: 70%;
    margin: auto;
    margin-top: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: #2B2E33;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    label{
        letter-spacing: 2px;
    }
    input{
        width: 80%;
        border: none;
        border-radius: 5px;
        height: 2em;
    }
    button{
        margin-top: 2em;
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
`