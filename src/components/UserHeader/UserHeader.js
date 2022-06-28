import React from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as Feed } from "../../assets/image/feed.svg"
import { ReactComponent as Statistics } from "../../assets/image/estatisticas.svg"
import { ReactComponent as AddPhoto } from "../../assets/image/adicionar.svg"
import { ReactComponent as Exit } from "../../assets/image/sair.svg"
import { UserContext } from "../../useContext"
import UserHeaderStyle from "./style"

const UserHeader = () => {
    const {userLogout} = React.useContext(UserContext)

    return(
        <UserHeaderStyle>
            <h2>Titulo</h2>
            <nav>
                <NavLink to='/feed'><Feed /></NavLink>
                <NavLink to='/statistics'><Statistics /></NavLink>
                <NavLink to='/add-photos'><AddPhoto /></NavLink>
                <button onClick={ userLogout }><Exit /></button>
            </nav>
        </UserHeaderStyle>
    )
}

export default UserHeader
