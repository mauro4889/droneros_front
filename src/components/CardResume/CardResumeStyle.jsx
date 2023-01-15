import styled from "styled-components";


export const CardResumeContainer = styled.div`
    width: 90%;
    border: solid 1px black;
    border-radius: 5px;
    margin: 1em auto;
    padding: 1em;
    p{
        font-weight: bold;
        margin: 5px auto;
        span{
            font-weight: lighter;
        }
    }
    @media (min-width: 767px){
        width: 100%;
        margin: auto;
        p{
            margin: auto;
        }
    }
`