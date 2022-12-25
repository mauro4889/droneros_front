import styled from "styled-components";


export const SlideshowStyle = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 17em;
    z-index: -110;
    @media (min-width: 1023px){
        height: 30em;
    }
    @media (min-width: 1365px){
        height: 40em;
    }
`

export const SliderStyle = styled.div`
    white-space: nowrap;
    transition: ease 1000ms;
`

export const SlideStyle = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media (min-width: 1023px){
        height: 400px;
    }
    @media (min-width: 1365px){
        height: 500px;
    }
`
export const SlideDotsStyle = styled.div`
    text-align: center;
`

export const SlideDotStyle = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
    &:active{
        background-color: #6a0dad;
    }
`