import styled from "styled-components";


export const AddCategoryContainer = styled.div`
    width: 100%;
    h3{
        text-align: center;
        margin-top: 4%;
    }
    form{
        width: 60%;
        margin: auto;
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        label, input{
            margin: 4% 0;
        }
        .containerButtons{
            margin-top: 6%;
            display: flex;
            justify-content: space-between;
        }
    }
`