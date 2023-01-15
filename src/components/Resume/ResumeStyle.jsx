import styled from "styled-components";



export const ResumeContainer = styled.div`
    width: 100%;
    padding-top: 6em;
    margin-bottom: 4em;
    h3{
        text-align: center;
    }
    .resumesContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 767px){
            display: grid;
            grid-template-columns: 6fr 6fr;
            gap: 1em;
            width: 90%;
            margin: auto;
        }
        @media (min-width: 1023px){
            grid-template-columns: 4fr 4fr 4fr;
        }
        @media (min-width: 1439px){
            grid-template-columns: repeat(4, 3fr);
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
`