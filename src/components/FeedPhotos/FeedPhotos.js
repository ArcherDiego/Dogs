import React from "react"
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem"
import Error from "../Error/Error"
import Loading from "../Loading/Loading"
import useFetch from "../../hooks/useFetch"
import { PHOTOS_GET } from "../../api/api"
import { FeedPhotosStyle } from "./style"

const FeedPhotos = () => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        const fetchPhotos = async () =>{
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {json} = await request(url, options)
            console.log(json)
        }
        fetchPhotos()
    },[request])

    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data)
    return(
        <FeedPhotosStyle>
            {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}
        </FeedPhotosStyle>
    )
    else return null
}

export default FeedPhotos