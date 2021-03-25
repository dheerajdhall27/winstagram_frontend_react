import {API_URL} from "../common/constants";

export const getHashTags = (tagname) => {
    return fetch(`${API_URL}search/hashtags/${tagname}`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            return null;
        })
}

export default {
    getHashTags
}

