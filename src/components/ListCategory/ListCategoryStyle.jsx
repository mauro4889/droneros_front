import styled from "styled-components";


export const ListCategoryContainer = styled.div`
    width: 100%;
    padding-top: 5em;
    h3{
        text-align: center;
        margin-top: 4%;
    }
    .backButton{
        margin: 2% auto;
        margin-left: 2%;
        border: none;
        background-color: #fff;
        font-size: 15px;
        cursor: pointer;        
    }
    .categoryAction{
        width: 90%;
        margin: auto;
        margin-top: 4%;
        display: grid;
        grid-template-columns: 2fr 10fr 2fr;
        font-weight: bold;
        @media (min-width: 1023px){
            grid-template-columns: 2fr 11fr 1fr
        }
    }
`