import React from "react"
import { useLocation } from "react-router-dom"
import { ReactComponent as Feed } from "../../assets/image/feed.svg"
import { ReactComponent as Statistics } from "../../assets/image/estatisticas.svg"
import { ReactComponent as AddPhoto } from "../../assets/image/adicionar.svg"
import { ReactComponent as Exit } from "../../assets/image/sair.svg"
import { UserContext } from "../../useContext"
import { UserHeaderStyle, StyleLink } from "./style"

const UserHeader = ({active, setActive}) => {
    const [mobile, setMobile] = React.useState(null)
    const [title, setTitle] = React.useState('')
    
    const location = useLocation()
    const { userLogout } = React.useContext(UserContext)

    React.useEffect(() => {
        const {pathname} = location
        switch(pathname){
            case '/account/statistics':
                setTitle('Stats')
                setActive('statistics')
                break
            case '/account/add-photos':
                setTitle('Add Photos')
                setActive('add-photos')
                break
            default:
                setTitle('My Account')
                setActive('account')
                break
        }
    }, [location, setActive])

    return(
        <UserHeaderStyle>
            <h2>{ title }</h2>
            <nav>
                <StyleLink active={active === 'account'} to='/account/feed'>
                    <Feed />
                    {mobile && 'My Feed'}
                </StyleLink>
                <StyleLink active={active === 'statistics'} to='/account/statistics'>
                    <Statistics />
                    {mobile && 'My Stats'}
                </StyleLink>
                <StyleLink active={active === 'add-photos'} to='/account/add-photos'>
                    <AddPhoto />
                    {mobile && 'Add Photos'}
                </StyleLink>
                <button onClick={ userLogout }>
                    <Exit />
                    {mobile && 'Exit'}
                </button>
            </nav>
        </UserHeaderStyle>
    )
}

export default UserHeader
