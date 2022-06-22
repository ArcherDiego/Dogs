import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginFormStyle = styled.div`
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }

    h2{
        font-family: ${({theme}) => theme.fontFamily.secund};
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
        z-index: 1;
    }

    h2::after{
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-color: #fb1;
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: .2rem;
        z-index: -1;
    }

    form{
        margin-bottom: 2rem;
    }
`;

export const LinkForgot = styled(Link)`
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &:after{
        content: '';
        height: 2px;
        width: 100%;
        background-color: currentColor;
        display: block;
    }
`;

export const LinkBtn = styled(Link)`
    font-size: 1rem;
    font-family: ${({theme}) => theme.fontFamily.first};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;

    &:hover, :focus {
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;

export const RegisterStyle = styled.div`
    margin-top: 4rem;

    h3{
        font-family: ${({theme}) => theme.fontFamily.secund};
        line-height: 1;
        font-size: 2rem;
    }

    h3::after{
        content: '';
        display: block;
        background-color: #ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem;
    }

    p{
        margin: 2rem 0;
    }
`;
