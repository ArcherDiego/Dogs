import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import { UserProfileStyle } from './style'

const UserProfile = () => {
    const {user} = useParams()

    return (
        <UserProfileStyle>
            <h1>{user}</h1>
            <Feed user={user} />
        </UserProfileStyle>
    )
}

export default UserProfile