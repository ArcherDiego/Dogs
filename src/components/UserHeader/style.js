import styled from "styled-components";
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
    nav a,
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

    nav a:hover,
    nav a:focus,
    nav button:hover,
    nav button:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
    }

    nav a.active{
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
    }

    nav a.active svg > * {
        fill: #fb1;
    }
`;

export const StyleLink = styled(NavLink)`
    background: ${({active}) => active ? "#FFF" : "#eee"};
    box-shadow: ${({active}) => active && "0 0 0 3px #fea"};
    border-color: ${({active}) => active && "#fb1"};

    svg > *{
        fill: ${({active}) => active && "#fb1"};
    }
`;
