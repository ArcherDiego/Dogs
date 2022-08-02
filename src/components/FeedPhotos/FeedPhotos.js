import React from "react"
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem"
import Error from "../Error/Error"
import Loading from "../Loading/Loading"
import useFetch from "../../hooks/useFetch"
import { PHOTOS_GET } from "../../api/api"
import { FeedPhotosStyle } from "./style"

const FeedPhotos = ({user, setModalPhoto}) => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        const total = 3
        const fetchPhotos = async () =>{
            const {url, options} = PHOTOS_GET({page: 1, total, user})
            const {response, json} = await request(url, options)
            if(response && response.ok && json.lenght < 3){

            }
        }
        fetchPhotos()
    },[request, user])

    if(error) return <Error error={error} />
    if(loading) return <Loading />
    if(data)
    return(
        <FeedPhotosStyle>
            {data.map(photo => <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo} />)}
        </FeedPhotosStyle>
    )
    else return null
}

export default FeedPhotos