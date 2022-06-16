import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Usuario from "../../assets/image/usuario.svg"

export const HeaderStyle = styled.header`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    padding: 0 1rem;
    width: 100%;
    top: 0;
    background: white;
    z-index: 100;

    nav {
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavLinkLogin = styled(NavLink)`
    color: #333;
    display: flex;
    align-items: center;

    &:after {
        content: "";
        display: inline-block;
        width: 14px;
        height: 17px;
        background: url('${ Usuario }');
        margin-left: 0.5rem;
        position: relative;
        top: -1px;
    }
`;
