import {API_URL} from "../common/constants";


export const getImageDetails = (imageId) => {
  return fetch(`${API_URL}images/getimage/${imageId}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      }

      return null;
    })
}

export default {
  getImageDetails
}
