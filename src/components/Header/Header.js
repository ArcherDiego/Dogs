import { NavLink } from "react-router-dom"
import { HeaderStyle, NavLinkLogin } from "./style"
import { ReactComponent as Dogs } from "../../assets/image/dogs.svg"

const Header = () => {
    return (
        <HeaderStyle>
            <nav>
                <NavLink to="/" end ><Dogs /></NavLink>
                <NavLinkLogin to="/login">Login / Register</NavLinkLogin>
            </nav>
        </HeaderStyle>
    )
}

export default Header
