import styled from "styled-components";


export const PaymentStyle = styled.div`
    width: 100vw;
    height: 5em;
    background-color: #FBFBFB;
    display: flex;
    justify-content: space-between;
`

export const ContainerStyle = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2px;
    font-size: 13px;
    .icon{
        font-size: 15px;
    }
    @media (min-width: 767px){
        .icon{
            font-size: 20px;
            margin-bottom: 2%;
        }
    }
`