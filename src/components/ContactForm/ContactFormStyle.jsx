import styled from "styled-components";


export const ContactFormStyle = styled.div` 
    width: 100vw;
    h2{
        text-align: center;
        margin: 5% auto;
        font-family: 'Open Sans';
        font-weight: 300;
    }
    form{
        margin: 5% auto;
        background-color: #F0F0F0;
        width: 80%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .input_container{
        width: 100%;
        padding-left: 5%;
        p{
            font-family: 'Open Sans';
            margin: 2% 0;
            letter-spacing: 1.5px;
        }
        input{
            width: 90%;
            border: none;
            height: 2em;
            padding-left: 2%;
        }
        textarea{
            width: 90%;
            resize: none;
            border: none;
        }
    }
    button{
            background-color: #FF0081;
            width: 5em;
            height: 2em;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            margin: 5% auto;
            cursor: pointer;
        }
    @media (min-width: 1023px){
        button{
            font-size: 20px;
        }
    }
`