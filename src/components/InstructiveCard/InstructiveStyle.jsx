import styled from "styled-components";


export const InstructiveStyle = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
    }
    .container{
        display: flex;
        flex-direction: column;
        margin-bottom: 5%;
    }
    .description{
        text-align: center;
        padding: 0 5%;
    }
    .icon{
        font-size: 25px;
        color: #929191;
    }
    .title{
        font-family: 'Open Sans';
        font-size: 20px;
        margin: 5% auto;
    }
    p{
        font-family: 'Open Sans';
        font-size: 15px;
        margin-bottom: 5%;
    }
    button{
        background-color: #FF0081;
        border: none;
        border-radius: 5px;
        height: 2em;
        color: #fff;
        width: 10em;
        font-weight: bold;
        cursor: pointer;
    }
    @media (min-width: 1023px){
        .icon{
            font-size: 30px;
        }
        .title{
            font-size: 25px
        }
        p{
            font-size: 20px;
            width: 80%;
            margin: auto;
            margin-bottom: 5%;
        }
        button{
            font-size: 20px;
        }
    }
`