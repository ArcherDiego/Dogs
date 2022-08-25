import React from "react"
import Feed from "../../components/Feed/Feed"
import { UserContext } from "../../useContext"
import HomeStyle from "./style"

const Home = () => {
    const {data} = React.useContext(UserContext)

    return (
        <HomeStyle>
            <Feed user={data} />
        </HomeStyle>
    )
}

export default Home
