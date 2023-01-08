import styled from "styled-components";


export const ContainerFeaturedStyle = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
        margin-top: 2em;
    }
    @media (min-width: 1360px){
        margin-bottom: 5%;   
    }
`

export const ContainerProductsStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`