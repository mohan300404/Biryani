import styled from "styled-components"
import FeaturePic from '../../images/ambbir.jpg'

export const FeatureContainer=styled.div`
    background:linear-gradient(to right,
     rgba(0,100,10,7),rgba(0,100,100,1));
    background-image: url(${FeaturePic});
    height:100vh;
    min-width:500px;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    text-align:center;
    padding:0 1rem;

    h1{
        font-size:clamp(3rem,5vw,5rem);
    }
    p{  
        margin-bottom:1rem;
        font-size:clamp(1rem,3vw,2rem);
    }
`
export const FeatureButton=styled.button`
    font-size:1.4rem;
    padding:0.6rem 3rem;
    border:none;
    background:#ffc500;
    color:#000;
    transistion:0.2s ease-out;

    &:hover{
        color:#fff;
        background:red;
        transistion:0.2s ease-out;
        cursor:pointer;
    }
`