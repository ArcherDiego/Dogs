import React from "react"
import Head from "../../components/Head/Head"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"
import UserAccount from "../Router/UserAccount"
import { StatisticsStyle } from "./style"

const UserStatistics = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <>
            <Head title='Stats' />
            <UserAccount />
            <StatisticsStyle>
                UserStats
            </StatisticsStyle>
        </>
    )
}

export default UserStatistics
