import React from "react";
import ImageComponent from "./ImageComponent";
import '../css/imagegallery.style.client.css'
import SearchListItem from "./SearchListItem";
const HashtagGrid = ({images}) =>
    <div className="gallery pt-2">
        {
            images && images.map(image =>
                <ImageComponent key={images.indexOf(image)}
                                source={image.imgURL}
                                uniqueId={image.id}/>
            )
        }

    </div>



export default HashtagGrid
