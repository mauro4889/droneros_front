import styled from "styled-components";


export const ErrorContainerStyle = styled.div`
    background-color: #FAFAFA;
    width: 100vw;
    height: 100vh;
    padding-top: 2em;
    .link{
        display: flex;
        gap: 10px;
        margin-left: 1em;
        margin-bottom: 2em;
        text-decoration: none;
        &:visited{
            color: #000;
        }
    h3{
        font-size: 20px;
        letter-spacing: 2px;
        font-family: 'Open Sans';
        font-weight: normal;
    }
    }
    img{
        width: 60vw;
        margin-left: 4em;
        @media (min-width: 767px){
            width: 40vw;
            margin-left: 14em;
            margin-top: 5em;
        }
        @media (min-width: 1023px){
            width: 30vw;
            margin-left: 22em;
        }
        @media (min-width: 1300px){
            width: 20vw;
            margin-left: 33em;

        }
    }
`