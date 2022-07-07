import React from "react"
import useMedia from "../../hooks/useMedia"
import { useLocation } from "react-router-dom"
import { ReactComponent as Feed } from "../../assets/image/feed.svg"
import { ReactComponent as Statistics } from "../../assets/image/estatisticas.svg"
import { ReactComponent as AddPhoto } from "../../assets/image/adicionar.svg"
import { ReactComponent as Exit } from "../../assets/image/sair.svg"
import { UserContext } from "../../useContext"
import { UserHeaderStyle, StyleLink, MobileBtnStyle, MobileBtnActiveStyle } from "./style"

const UserHeader = ({active, setActive}) => {
    const { userLogout } = React.useContext(UserContext)
    const [title, setTitle] = React.useState('')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    
    const location = useLocation()
    const mobile = useMedia('(max-width: 40rem)')

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
            <div>
                {mobile && ( mobileMenu ? (
                <MobileBtnActiveStyle onClick={() => setMobileMenu(!mobileMenu)}></MobileBtnActiveStyle>
                ) : (
                <MobileBtnStyle onClick={() => setMobileMenu(!mobileMenu)}></MobileBtnStyle>
                ))}
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
            </div>
        </UserHeaderStyle>
    )
}

export default UserHeader
