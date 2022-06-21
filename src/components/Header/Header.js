import React from "react"
import { UserContext } from "../../useContext"
import { NavLink } from "react-router-dom"
import { HeaderStyle, NavLinkLogin } from "./style"
import { ReactComponent as Dogs } from "../../assets/image/dogs.svg"

const Header = () => {
    const { data } = React.useContext(UserContext)

    return (
        <HeaderStyle>
            <nav>
                <NavLink to="/" end >
                    <Dogs />
                </NavLink>
                {data ? (
                <NavLinkLogin to="/account">
                    {data.nome}
                </NavLinkLogin>
                ) : (
                <NavLinkLogin to="/login">
                    Login / Register
                </NavLinkLogin>
                )}
            </nav>
        </HeaderStyle>
    )
}

export default Header
