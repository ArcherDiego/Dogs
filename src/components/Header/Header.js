import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" end >Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login / Register</NavLink>
            </li>
        </ul>
    )
}

export default Header
