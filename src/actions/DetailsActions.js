import {DELETE_IMAGE, GET_IMAGE_DETAILS} from "../common/constants";


export const updateImageDetails = (image) => ({
  type: GET_IMAGE_DETAILS,
  image: image
});
