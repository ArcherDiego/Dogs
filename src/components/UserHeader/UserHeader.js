import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as Feed } from "../../assets/image/feed.svg"
import { ReactComponent as Statistics } from "../../assets/image/estatisticas.svg"
import { ReactComponent as AddPhoto } from "../../assets/image/adicionar.svg"
import { ReactComponent as Exit } from "../../assets/image/sair.svg"
import { UserContext } from "../../useContext"
import { UserHeaderStyle } from "./style"

const UserHeader = () => {
    const [mobile, setMobile] = React.useState(null)
    const [title, setTitle] = React.useState('')
    
    const location = useLocation()
    const { userLogout } = React.useContext(UserContext)

    React.useEffect(() => {
        const {pathname} = location
        switch(pathname){
            case '/account/statistics':
                setTitle('Stats')
                break
            case '/account/add-photos':
                setTitle('Add Photos')
                break
            default:
                setTitle('My Account')
                break
        }
    }, [location])

    return(
        <UserHeaderStyle>
            <h2>{ title }</h2>
            <nav>
                <NavLink to='/account/feed'>
                    <Feed />
                    {mobile && 'My Feed'}
                </NavLink>
                <NavLink to='/account/statistics'>
                    <Statistics />
                    {mobile && 'My Stats'}
                </NavLink>
                <NavLink to='/account/add-photos'>
                    <AddPhoto />
                    {mobile && 'Add Photos'}
                </NavLink>
                <button onClick={ userLogout }>
                    <Exit />
                    {mobile && 'Exit'}
                </button>
            </nav>
        </UserHeaderStyle>
    )
}

export default UserHeader
