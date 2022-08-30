import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from "../../components/Head/Head"
import { UserProfileStyle } from './style'

const UserProfile = () => {
    const {user} = useParams()

    return (
        <UserProfileStyle>
            <Head title={user} />
            <h1>{user}</h1>
            <Feed user={user} />
        </UserProfileStyle>
    )
}

export default UserProfile