import styled from "styled-components";


export const CardProductResumeContainer = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: 50%;
    }
    p{
        font-weight: bold;
        text-align: center;
    }
    .containerButton{
        width: 100%;
        display: flex;
        justify-content: space-around;
        button{
            width: 20%;
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            border: none;
            margin-top: 1em;
            border-radius: 5px;
            @media (min-width: 767px){
                width: 10%;
                height: 1.5em;
            }
        }
        .addProduct{
            background-color: #20A5F4;
        :hover{
            background-color: #0f5680;
        }
        }
        .restProduct{
            background-color: #FB0100;
        :hover{
            background-color: #a80606;
        }
    }
}
`