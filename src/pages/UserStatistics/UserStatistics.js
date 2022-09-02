import React, { lazy } from "react"
import Head from "../../components/Head/Head"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"
import UserAccount from "../Router/UserAccount"
import { StatisticsStyle } from "./style"
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { STATS_GET } from "../../api/api"
const StatsGraph = React.lazy(() => import("../../components/StatsGraph/StatsGraph"))

const UserStatistics = () => {
    const {data, loading, error, request} = useFetch()
    const {login} = React.useContext(UserContext)

    React.useEffect(() => {
        const getData = async () => {
            const {url, options} = STATS_GET()
            await request(url, options)
        }
        getData()
    }, [request])

    if(login === false || login === null) return <Navigate to='/login' />
    if(loading) return <Loading />
    if(error) return <Error error={error} />
    if(data){
    return(
        <React.Suspense fallback={<Loading />}>
            <Head title='Stats' />
            <UserAccount />
            <StatisticsStyle>
                <StatsGraph data={data} />
            </StatisticsStyle>
        </React.Suspense>
    )} else return null
}

export default UserStatistics
