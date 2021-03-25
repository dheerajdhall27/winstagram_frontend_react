import React from "react";
import ImageComponent from "./ImageComponent";
import '../css/imagegallery.style.client.css'

const ImageGrid = ({userData}) =>
    <div className="gallery pt-2">
        {
            userData && userData.imageList.map(data =>
                <ImageComponent key={data._id}
                                source={data.imageUrl}
                                uniqueId={data._id}
                                userData={userData}
                             />
            )
        }
    </div>;



export default ImageGrid
