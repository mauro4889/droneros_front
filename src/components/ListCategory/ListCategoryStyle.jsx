import styled from "styled-components";


export const ListCategoryContainer = styled.div`
    width: 100%;
    h3{
        text-align: center;
        margin-top: 4%;
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