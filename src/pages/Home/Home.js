import React from "react"
import Feed from "../../components/Feed/Feed"
import Head from "../../components/Head/Head"
import { UserContext } from "../../useContext"
import HomeStyle from "./style"

const Home = () => {
    const {data} = React.useContext(UserContext)

    return (
        <HomeStyle>
            <Head title='Feed' />
            <Feed user={data} />
        </HomeStyle>
    )
}

export default Home
