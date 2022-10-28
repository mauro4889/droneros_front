import styled from "styled-components";


export const ContainerCategoryStyle = styled.div`
    width: 100vw;
    background-color: rgb(34, 34, 34);
    padding-top: 5%;
    padding-bottom: 5%;
    h2{
        color: #fff;
        text-align: center;
        margin-bottom: 5%;
    }
`

export const ContainerDronesStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`
export const CardDroneCategotyStyle = styled.div`
width: 45%;
background-color: #fff;
border-radius: 5px;
overflow: hidden;
img{
    width: 100%;
    height: 8em;
}
p{
    text-align: center;
}
@media (min-width: 767px){
    background-position: center;
    img{
        width: 50%;
        display: block;
        margin: auto;
    }
    p{
        margin: 2.5% auto;
    }
}
@media (min-width: 1023px){
    height: 15em;
    width: 40%;
    img{
        height: 10em;
        width: 40%;
    }
    p{
        font-size: 20px;
        font-weight: 500;
    }
}
`