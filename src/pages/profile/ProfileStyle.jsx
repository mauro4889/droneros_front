import styled from "styled-components";


export const ProfileContainer = styled.div`
    width: 100%;
    h3{
        text-align: center;
        margin-top: 4%;
        font-size: 25px;
        letter-spacing: 2px;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 4% auto;
        @media (min-width: 1439px){
            width: 40%;
        }
        button{
            margin: 4% 0;
            height: 2em;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            width: 100%;
            cursor: pointer;
            :focus{
                background-color: #FF0081;
                color: #fff;
            }
        }
    }
`