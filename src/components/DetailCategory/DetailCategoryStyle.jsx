import styled from "styled-components";


export const DetailCategoryContainer = styled.div`
    width: 90%;
    margin: 2% auto;
    display: grid;
    grid-template-columns: 2fr 10fr 2fr;
    border-bottom: 1px solid #000;
    padding-bottom: 1%;
    form{
        display: flex;
        justify-content: space-between;
        @media (min-width: 1023px){
            justify-content: space-evenly;
            margin-left: 4em;
        }
        button{
            color: #FF0081;
            border: none;
            background-color: #fff;
            cursor: pointer;
        }
    }
`