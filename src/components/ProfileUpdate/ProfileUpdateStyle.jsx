import styled from "styled-components";


export const ProfileUpdateContainer = styled.div`
    width: 100%;
    h3{
        text-align: center;
        margin-top: 5%;
        font-weight: 200;
        font-family: 'Open-Sans';
        @media (min-width: 1439px){
            margin-top: 2%;
            font-size: 30px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        width: 70%;
        margin: auto;
        margin-top: 6%;
        @media (min-width: 767px){
            width: 60%;
        }
        @media (min-width: 1023px){
            width: 50%;
        }
        @media (min-width: 1439px){
            width: 40%;
            margin-top: 4%;
        }
        label, button{
            margin: 2% 0;
        }
        label{
            font-weight: bold;
        }
        .containerButton{
            display: flex;
            justify-content: space-around;
            margin-top: 6%;
            button{
                width: 30%;
                border: none;
                border-radius: 5px;
                height: 2em;
                color: #fff;
                font-weight: bold;
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
                }
            }
`
