import React from "react"
import { Navigate } from "react-router-dom"
import UserHeader from "../../components/UserHeader/UserHeader"
import { UserContext } from "../../useContext"

const Account = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <div>
            <UserHeader />
        </div>
    )
}

export default Account
