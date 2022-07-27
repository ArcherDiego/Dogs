import React from "react"
import { PHOTO_DELETE } from "../../api/api"
import useFetch from "../../hooks/useFetch"
import { DeleteStyle } from "./style"

const PhotoDelete = ({id}) => {
    const {loading, request} = useFetch()

    const handleClick = async () => {
        const confirm = window.confirm("Are you sure about that?")
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
            const {response} = await request(url, options)
            if(response.ok) window.location.reload()
        }
    }

    return(
        <>
            {loading ? (
            <DeleteStyle disabled>Loading...</DeleteStyle>
            ) : (
            <DeleteStyle onClick={handleClick}>Delete</DeleteStyle>
            )}
        </>
    )
}

export default PhotoDelete