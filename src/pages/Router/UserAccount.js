import React from "react"
import UserHeader from "../../components/UserHeader/UserHeader"

const UserAccount = () => {
    const [active, setActive] = React.useState('account')

    return(
        <section>
            <UserHeader active={active} setActive={setActive} />
        </section>
    )
}

export default UserAccount
