import React from "react";
import '../css/imagegallery.style.client.css'
import {Link} from "react-router-dom";

const ImageComponent =({source, uniqueId}) =>
    <div className="gallery-item border" tabIndex="0">
      <Link to={`/details/${uniqueId}`} onClick={(e) => {
        if(uniqueId === undefined) {
          e.preventDefault()
        }
      }}>
        <img className="gallery-image" src={source} alt=""/>
      </Link>
    </div>;

export default ImageComponent;
