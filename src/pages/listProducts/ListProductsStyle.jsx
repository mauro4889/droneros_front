import styled from "styled-components";


export const ListProductsContainer = styled.div`
    width: 100%;
    h2{
        text-align: center;
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

export const ContainerProductsDetail = styled.div`
    width: 100%;
    text-align: center;
    .header-details{
        width: 100%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 3fr 3fr 3fr 2fr;
        font-weight: bold;
        margin-top: 5%;
    }
`