import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const UserHeaderStyle = styled.header`
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
`;

export const NavStyle = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    button{
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

    button:hover,
    button:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
    }
`;

export const NavActiveStyle = styled.nav`
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;

    a, 
    button{
        display: flex;
        align-items: center;
        background: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: 0.5rem 0;
        cursor: pointer;
    }

    a:hover svg > *, 
    button:hover svg > *{
        fill: #fb1;
    }

    button{
        border-bottom: none;
    }

    svg{
        margin-right: 0.5rem;
    }
`;

export const NavMenuStyle = styled.nav`
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a, 
    button{
        display: flex;
        align-items: center;
        background: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: 0.5rem 0;
        cursor: pointer;
    }

    a:hover svg > *, 
    button:hover svg > *{
        fill: #fb1;
    }

    button{
        border-bottom: none;
    }

    svg{
        margin-right: 0.5rem;
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

        &:hover,
        &:focus{
            border-color: #333;
            box-shadow: 0 0 0 3px #eee;
        }
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
