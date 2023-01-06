import styled from "styled-components";


export const CategoryContainer = styled.div`
    width: 100%;
    h3{
        text-align: center;
        margin-top: 5%;
    }
    .containerButtons{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: auto;
        margin-top: 5%;
        button{
            width: 60%;
            margin: 2% auto;
            height: 2.5em;
            border: none;
            font-weight: bold;
            font-size: 15px;
            border-radius: 5px;
        }
    }
`