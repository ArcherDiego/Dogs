import React from "react"
import { PHOTO_GET } from "../../api/api"
import useFetch from "../../hooks/useFetch"
import Error from "../Error/Error"
import Loading from "../Loading/Loading"
import PhotoContent from "../PhotoContent/PhotoContent"
import { FeedModalStyle } from "./style"

const FeedModal = ({photo, setModalPhoto}) =>{
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo, request])

    const handleOutSideClick = (event) => {
        if(event.target === event.currentTarget){
            setModalPhoto(null)
        }
    }

    return(
        <FeedModalStyle onClick={ handleOutSideClick }>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </FeedModalStyle>
    )
}

export default FeedModal
