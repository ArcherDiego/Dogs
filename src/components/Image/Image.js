import React from 'react'
import { WrapperStyle, SkeletonStyle } from "./style"

const Image = ({alt, ...rest}) => {
    const [skeleton, setSkeleton] = React.useState(true)

    const handleLoad = ({target}) => {
        setSkeleton(false)
        target.style.opacity = 1
    }

    return (
        <WrapperStyle>
            {skeleton && <SkeletonStyle></SkeletonStyle>}
            <img onLoad={handleLoad} alt={alt} {...rest} />
        </WrapperStyle>
    )
}

export default Image
