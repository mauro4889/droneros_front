import styled from "styled-components";


export const AddProductContainer = styled.div`
    width: 100%;
    h2{
        margin-top: 2%;
        text-align: center;
        font-family: 'Open Sans';
    }
`

export const AddProductForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    margin-top: 4%;
    label{
        font-weight: bold;
        margin-bottom: 2%;
    }
    input{
        margin-bottom: 4%;
    }
    select{
        margin-bottom: 4%;
    }
    @media (min-width: 767px){
        width: 60%;
    }
    @media (min-width: 1023px){
        width: 50%;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
    button{
        width: 8em;
        height: 2em;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }
    .accept{
        background-color: #20A5F4;
        :hover{
            background-color: #0f5680;
        }
    }
    .cancel{
        background-color: #FB0100;
        :hover{
            background-color: #a80606;
        }
    }
`