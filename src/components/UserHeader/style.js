import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const UserHeaderStyle = styled.header`
    ${({theme}) => theme.container}
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    position: relative;

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

    nav{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    nav button{
        background: #eee;
        border-radius: 0.2rem;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        transition: 0.1s;
        cursor: pointer;
    }

    nav button:hover,
    nav button:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
    }
`;

export const StyleLink = styled(NavLink)`
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus{
        background: white;
        outline: none;
    }

    ${({active}) => active ? css`
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
    ` : css`
        background: #eee;
        box-shadow: 0 0 0 3px #eee;
    `}

    svg > *{
        fill: ${({active}) => active && "#fb1"};
    }
`;

export const MobileBtnStyle = styled.button`
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &::after{
        content: '';
        display: block;
        width: 1.2rem;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        box-shadow: 0 6px currentColor, 0 -6px currentColor;
        transition: 0.2s;
    }

    &:focus,
    &:hover{
        outline: none;
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
        color: #fb1;
    }
`;

export const MobileBtnActiveStyle = styled.button`
    background: white;
    height: 40px;
    width: 40px;
    padding: 0;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    border-color: #fb1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    cursor: pointer;
    outline: none;
    box-shadow: 0 0 0 3px #fea;
    color: #fb1;

    &::after{
        content: '';
        display: block;
        border-radius: 2px;
        transform: rotate(-90deg);
        transition: 0.2s;
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
`;
