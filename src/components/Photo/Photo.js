import React from "react"
import { useParams } from "react-router-dom"
import { PHOTO_GET } from "../../api/api"
import useFetch from "../../hooks/useFetch"
import Error from "../Error/Error"
import Head from "../Head/Head"
import Loading from "../Loading/Loading"
import PhotoContent from "../PhotoContent/PhotoContent"
import { PhotoContentPage } from "./style"

const Photo = () => {
    const {id} = useParams()
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(id)
        request(url, options)
    }, [request, id])

    if(loading) return <Loading />
    if(error) return <Error error={error} />
    if(data){
        return(
            <PhotoContentPage>
                <Head title={data.photo.title} />
                <PhotoContent single={true} data={data} />
            </PhotoContentPage>
        )
    } else return null
}

export default Photo
