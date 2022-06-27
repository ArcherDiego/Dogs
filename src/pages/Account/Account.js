import React from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"

const Account = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <div>
            <h2>Account</h2>
        </div>
    )
}

export default Account
